const { StatusCodes } = require("http-status-codes");
const JobPostModel = require("../model/JobPostModel");
const getCountryCode = require("../utils/getCountryFlag");
const { formateFile } = require("../middleware/multerMiddleware");
const cloudinary = require("cloudinary");
const getAllJobPost = async (req, res) => {
  const { skills, position } = req.query;
  const userSkills = skills?.split(",") || [];
  const query = {};
  const skillAggregationPipeline = [
    {
      $unwind: "$skillsRequired",
    },
    {
      $group: {
        _id: null,
        allSkills: { $addToSet: "$skillsRequired" },
      },
    },
    {
      $project: {
        _id: 0,
        allSkills: 1,
      },
    },
  ];
  const allSkillsResult = await JobPostModel.aggregate(
    skillAggregationPipeline
  );
  console.log(allSkillsResult);
  if (userSkills.length !== 0) {
    query.skillsRequired = {
      $in: userSkills.map((skill) => new RegExp(`^${skill}$`, "i")),
    };
  }
  if (position) {
    query.$or = [{ jobPosition: { $regex: position, $options: "i" } }];
  }
  const jobs = await JobPostModel.find(query, {
    information: 0,
    aboutCompany: 0,
    jobDescription: 0,
  });
  res
    .status(StatusCodes.OK)
    .json({ jobs, allSkills: allSkillsResult[0]?.allSkills || [] });
};

const createJobPost = async (req, res) => {
  req.body.createdBy = req.user.id;

  let data = await getCountryCode(req.body.location);
  req.body.countryFlag = data.flag;
  req.body.country = data.country;
  const newJob = {
    ...req.body,
    skillsRequired: req.body.skillsRequired.split(","),
  };
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(formateFile(req.file));
    newJob.logoUrl = response.secure_url;
    newJob.logoUrlPublicId = response.public_id;
    req.file.buffer = null;
  }
  const createdJobPost = await JobPostModel.create(newJob);
  res.status(StatusCodes.CREATED).json(createdJobPost);
};
const getJobPost = async (req, res) => {
  const { id } = req.params;
  const jobPost = await JobPostModel.findById({ _id: id });
  res.status(StatusCodes.OK).json({ job: jobPost });
};
const editJobPost = async (req, res) => {
  const { id } = req.params;
  const jobToUpdate = await JobPostModel.findById(id);

  if (jobToUpdate.location !== req.body.location) {
    let data = await getCountryCode(req.body.location);
    req.body.countryFlag = data.flag;
    req.body.country = data.country;
  }
  const newJobObj = {
    ...req.body,
    skillsRequired: req.body.skillsRequired.split(","),
  };
  if (jobToUpdate.logoUrl && req.file) {
    await cloudinary.v2.uploader.destroy(jobToUpdate.logoUrlPublicId);
  }
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(formateFile(req.file));
    newJobObj.logoUrl = response.secure_url;
    newJobObj.logoUrlPublicId = response.public_id;
    req.file.buffer = null;
  }

  const updatedJob = await JobPostModel.findByIdAndUpdate(id, newJobObj, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Job updated successfully", updatedJob });
};
const createComment = async (req, res) => {
  let comment = {};
  comment.text = req.body.text;
  comment.commentedBy = req.user.id;
  const { id } = req.params;
  const updatedJobComments = await JobPostModel.findByIdAndUpdate(
    id,
    {
      $push: { comments: comment },
    },
    { new: true, projection: { comments: 1 } }
  );

  res.status(StatusCodes.CREATED).json(updatedJobComments);
};

const deleteJobPost = (req, res) => {
  res.send("delete job post");
};

module.exports = {
  getAllJobPost,
  createJobPost,
  getJobPost,
  editJobPost,
  deleteJobPost,
  createComment,
};
