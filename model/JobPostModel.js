const mongoose = require("mongoose");
const { JOB_TYPE, LOCATION_PREFERENCE } = require("../utils/constant");
const JobPostSchema = new mongoose.Schema(
  {
    companyName: String,
    logoUrl: String,
    logoUrlPublicId: String,
    jobPosition: String,
    monthlySalary: String,
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: "full-time",
    },
    locationPreference: {
      type: String,
      enum: Object.values(LOCATION_PREFERENCE),
      default: "office",
    },
    location: String,
    countryFlag: String,
    country: String,
    jobDescription: String,
    aboutCompany: {
      type: String,
    },
    companySize: String,
    jobDuration: String,
    skillsRequired: [String],
    information: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Job", JobPostSchema);
