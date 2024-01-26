const { body, validationResult, param } = require("express-validator");
const {
  BadRequestError,
  NotFoundError,
  UnAuthorizedError,
} = require("../errors/customError");
const { JOB_TYPE, LOCATION_PREFERENCE } = require("../utils/constant");
const mongoose = require("mongoose");
const JobPostModel = require("../model/JobPostModel");
const withValidationErrors = (validateValue) => {
  return [
    validateValue,
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        const errorMessage = result.array().map((error) => error.msg);
        if (errorMessage[0].startsWith("no job"))
          throw new NotFoundError(errorMessage);

        if (errorMessage[0].startsWith("not authorized"))
          throw new UnAuthorizedError(errorMessage);

        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};
const validateJobInput = withValidationErrors([
  body("companyName").notEmpty().withMessage("company name is required"),

  body("jobPosition").notEmpty().withMessage("job position is required"),
  body("monthlySalary").notEmpty().withMessage("monthly salary is required"),
  body("skillsRequired")
    .notEmpty()
    .withMessage("Atleast should have one must have skill"),
  body("jobType")
    .notEmpty()
    .withMessage("job type is required")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid job type value"),
  body("locationPreference")
    .notEmpty()
    .withMessage("location preference is required")
    .isIn(Object.values(LOCATION_PREFERENCE))
    .withMessage("invalid location preference value"),
  body("location").notEmpty().withMessage("location is required"),
  body("companySize").notEmpty().withMessage("companySize is required"),
  body("jobDescription").notEmpty().withMessage("Job description is required"),
  body("information").notEmpty().withMessage("Job information is required"),
]);

const validateParamsId = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("Invalid mongodb id");
    const job = await JobPostModel.findById(value);
    if (!job) throw new NotFoundError(`no job with ${value} id`);
    if (req.baseUrl === "/api/v1/jobs" && req.method === "GET") return;
    const isOwner = req.user.id === job.createdBy.toString();
    if (!isOwner) {
      throw new UnAuthorizedError("not authorized to access this route 43");
    }
  }),
]);

const validateUserRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),

  body("mobile")
    .notEmpty()
    .withMessage("mobile no. is required")
    .isLength(10)
    .withMessage("No. should be of 10 digit"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password should be atleast of 8 character"),
]);

const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

module.exports = {
  validateJobInput,
  validateUserRegisterInput,
  validateParamsId,
  validateLoginInput,
};
