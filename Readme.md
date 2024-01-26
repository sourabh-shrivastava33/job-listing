# JOB LISTING APP

#### server.js

Added express server boilerplate code to server.js

```js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### model/JobPostModel.js

Added JobPostModel Schema for the database

```js
const mongoose = require("mongoose");
const { JOB_TYPE, LOCATION_PREFERENCE } = require("../utils/constant");
const JobPostSchema = new mongoose.Schema(
  {
    companyName: String,
    logoUrl: String,
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
    jobDescription: String,
    aboutCompany: {
      type: String,
    },
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
```

#### routes/jobRoutes.js

Added routing for job post

```js
const express = require("express");
const {
  getAllJobPost,
  createJobPost,
  editJobPost,
  deleteJobPost,
  getJobPost,
} = require("../controllers/jobController");
const { validateJobInput } = require("../middleware/validationMiddleware");
const router = express.Router();

router.route("/").get(getAllJobPost).post(createJobPost);
router.route("/:id").get(getJobPost).patch(editJobPost).delete(deleteJobPost);
module.exports = router;
```

#### middleware/validationMiddleware.js

For validation i am using express-validator library

```sh
npm i express-validator
```

validation of createJobPost

```js
const { body, query, validationResult } = require("express-validator");

const withValidationErrors = (validateValue) => {
  return [
    validateValue,
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        const errorMessage = result.array().map((error) => error.msg);
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

const validateJobInput = withValidationErrors([
  body("companyName").notEmpty().withMessage("company name is required"),
  body("logoUrl")
    .notEmpty()
    .withMessage("Logo url is required")
    .isURL({ protocols: ["https", "http"] })
    .withMessage("protocol needs to be https ")
    .matches(/\.(png|jpg|jpeg)$/i)
    .withMessage(
      "Invalid logo URL. Must be a valid URL with a supported image extension."
    ),
  body("jobPosition").notEmpty().withMessage("job position is required"),
  body("monthlySalary").notEmpty().withMessage("monthly salary is required"),

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
  body("skillsRequired")
    .isArray({ min: 1 })
    .withMessage("should contains atleast one skill requirement"),
  body("jobDescription").notEmpty().withMessage("Job description is required"),
  body("information").notEmpty().withMessage("Job information is required"),
]);
```

#### routes/jobRoutes.js

Adding validation to createJobPost Route

```js
const express = require("express");
const {
  getAllJobPost,
  createJobPost,
  editJobPost,
  deleteJobPost,
  getJobPost,
} = require("../controllers/jobController");
const { validateJobInput } = require("../middleware/validationMiddleware");
const router = express.Router();

router.route("/").get(getAllJobPost).post(validateJobInput, createJobPost);
router.route("/:id").get(getJobPost).patch(editJobPost).delete(deleteJobPost);
module.exports = router;
```

#### JobPost Example

created using chatgpt

```json
1.)
{
   "jobListing": {
      "companyName": "Tech Innovators Inc.",
      "logoUrl": "https://techinnovators.com/logo.png",
      "jobDetails": {
         "position": "Senior Software Engineer",
         "monthlySalary": "7000 - 9000 USD",
         "jobType": "full-time",
         "locationPreference": "office",
         "location": "San Francisco, CA, USA"
      },
      "jobDescription": "Tech Innovators Inc. is seeking a talented Senior Software Engineer to join our dynamic team. In this role, you will be responsible for designing and developing innovative software solutions...",
      "aboutCompany": "Tech Innovators Inc. is a cutting-edge technology company that specializes in creating groundbreaking software solutions for various industries. With a focus on innovation and collaboration, we strive to push the boundaries of what's possible in the tech world.",
      "skillsRequired": [
         "JavaScript",
         "React",
         "Node.js",
         "RESTful APIs",
         "MongoDB"
      ],
      "applicationInformation": {
         "howToApply": "To apply for this position, please submit your resume and portfolio to hr@techinnovators.com.",
         "applicationDeadline": "Deadline for applications is [Insert Deadline]."
      }
   }
}


2.)
{
   "companyName": "DataTech Solutions",
   "logoUrl": "https://datatechsolutions.com/logo.png",
   "jobPosition": "Data Scientist",
   "monthlySalary": "8000 - 10000 USD",
   "jobType": "full-time",
   "locationPreference": "remote",
   "location": "Anywhere",
   "jobDescription": "DataTech Solutions is seeking a skilled Data Scientist to analyze and interpret complex datasets...",
   "aboutCompany": "DataTech Solutions is a leading data analytics company, specializing in deriving actionable insights from vast and diverse datasets.",
   "skillsRequired": [
      "Python",
      "Machine Learning",
      "Statistical Analysis",
      "SQL",
      "Data Visualization"
   ],
   "information": "To apply for this position, please send your resume and cover letter to hr@datatechsolutions.com. Deadline for applications is [Insert Deadline]."
}

3.)
{
   "companyName": "EcoTech Innovations",
   "logoUrl": "https://ecotechinnovations.com/logo.png",
   "jobPosition": "Environmental Engineer",
   "monthlySalary": "7500 - 9500 USD",
   "jobType": "full-time",
   "locationPreference": "office",
   "location": "Seattle, WA, USA",
   "jobDescription": "EcoTech Innovations is looking for an Environmental Engineer to develop sustainable solutions for environmental challenges...",
   "aboutCompany": "EcoTech Innovations is dedicated to creating eco-friendly technologies and solutions to promote a sustainable future.",
   "skillsRequired": [
      "Environmental Engineering",
      "Renewable Energy",
      "Climate Modeling",
      "GIS",
      "Environmental Impact Assessment"
   ],
   "information": "To apply for this position, please submit your resume and a brief statement of interest to hr@ecotechinnovations.com. Deadline for applications is [Insert Deadline]."
}

4.)
{
   "companyName": "HealthHub Technologies",
   "logoUrl": "https://healthhubtech.com/logo.png",
   "jobPosition": "Senior Health Informatics Specialist",
   "monthlySalary": "8500 - 11000 USD",
   "jobType": "full-time",
   "locationPreference": "hybrid",
   "location": "Boston, MA, USA",
   "jobDescription": "HealthHub Technologies is hiring a Senior Health Informatics Specialist to optimize healthcare data management and analysis...",
   "aboutCompany": "HealthHub Technologies is a leading provider of health information technology, dedicated to improving patient care through innovative solutions.",
   "skillsRequired": [
      "Health Informatics",
      "EHR Systems",
      "Clinical Data Analysis",
      "HL7/FHIR Standards",
      "Data Security in Healthcare"
   ],
   "information": "To apply for this position, please email your resume and references to hr@healthhubtech.com. Deadline for applications is [Insert Deadline]."
}

5.)
{
   "companyName": "GreenEnergy Solutions",
   "logoUrl": "https://greenenergy.com/logo.png",
   "jobPosition": "Renewable Energy Analyst",
   "monthlySalary": "7000 - 9000 USD",
   "jobType": "full-time",
   "locationPreference": "office",
   "location": "Denver, CO, USA",
   "jobDescription": "GreenEnergy Solutions is seeking a Renewable Energy Analyst to assess and optimize renewable energy projects...",
   "aboutCompany": "GreenEnergy Solutions is committed to advancing renewable energy initiatives for a sustainable and greener future.",
   "skillsRequired": [
      "Energy Analysis",
      "Wind and Solar Modeling",
      "Project Finance",
      "Environmental Impact Assessment",
      "Sustainable Development"
   ],
   "information": "To apply for this position, please submit your resume and a cover letter to hr@greenenergy.com. Deadline for applications is [Insert Deadline]."
}

6.)
{
   "companyName": "SpaceTech Explorations",
   "logoUrl": "https://spacetech.com/logo.png",
   "jobPosition": "Satellite Systems Engineer",
   "monthlySalary": "9000 - 12000 USD",
   "jobType": "full-time",
   "locationPreference": "office",
   "location": "Houston, TX, USA",
   "jobDescription": "SpaceTech Explorations is hiring a Satellite Systems Engineer to contribute to space exploration projects...",
   "aboutCompany": "SpaceTech Explorations is at the forefront of space technology, dedicated to advancing our understanding of the cosmos.",
   "skillsRequired": [
      "Satellite Systems",
      "Orbital Mechanics",
      "RF Communication Systems",
      "Spacecraft Design",
      "Astrodynamics"
   ],
   "information": "To apply for this position, please send your resume and a statement of purpose to hr@spacetech.com. Deadline for applications is [Insert Deadline]."
}

7.)
{
   "companyName": "FinTech Innovators",
   "logoUrl": "https://fintechinnovators.com/logo.png",
   "jobPosition": "Blockchain Developer",
   "monthlySalary": "8000 - 10000 USD",
   "jobType": "full-time",
   "locationPreference": "remote",
   "location": "Anywhere",
   "jobDescription": "FinTech Innovators is seeking a skilled Blockchain Developer to drive innovation in financial technology...",
   "aboutCompany": "FinTech Innovators is a pioneer in financial technology, aiming to revolutionize the way we interact with money and transactions.",
   "skillsRequired": [
      "Blockchain Development",
      "Smart Contracts",
      "Cryptocurrency",
      "Solidity",
      "Distributed Ledger Technology"
   ],
   "information": "To apply for this position, please submit your resume and a portfolio of your blockchain projects to hr@fintechinnovators.com. Deadline for applications is [Insert Deadline]."
}

8.)
{
   "companyName": "RoboHealth Innovations",
   "logoUrl": "https://robohealth.com/logo.png",
   "jobPosition": "Healthcare Robotics Engineer",
   "monthlySalary": "8500 - 11000 USD",
   "jobType": "full-time",
   "locationPreference": "office",
   "location": "San Jose, CA, USA",
   "jobDescription": "RoboHealth Innovations is seeking a Healthcare Robotics Engineer to design and develop innovative robotic solutions for the healthcare industry...",
   "aboutCompany": "RoboHealth Innovations is dedicated to advancing healthcare through the integration of robotics and cutting-edge technology.",
   "skillsRequired": [
      "Robotics Engineering",
      "Medical Imaging",
      "Human-Robot Interaction",
      "ROS (Robot Operating System)",
      "Healthcare Automation"
   ],
   "information": "To apply for this position, please send your resume and a cover letter to hr@robohealth.com. Deadline for applications is [Insert Deadline]."
}
```

#### Authentication of user

authcontroller for controlling login,register and logout of user

```js
const { StatusCodes } = require("http-status-codes");
const UserModel = require("../model/UserModel");
const { oneDay } = require("../utils/constant");
const { UnAuthenticatedError } = require("../errors/customError");
const { hashPassword, comparePassword } = require("../utils/password");
const { createJwt } = require("../utils/token");
const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await UserModel.create(req.body);
  const token = createJwt({ id: user._id, recruiterName: user.name });
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res
    .status(StatusCodes.CREATED)
    .json({ msg: `${user.name} is registered successfully` });
};
const login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  const isValid =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValid) throw new UnAuthenticatedError("Invalid credentials");
  const token = createJwt({ id: user._id });
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ msg: `${user.name} is logged in successfully` });
};
const logout = (req, res) => {
  res.cookie("token", "logout", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
module.exports = { register, login, logout };
```

authenticateUserMiddleware for checking the authentication of user sending request

```js
const { UnAuthenticatedError } = require("../errors/customError");
const { verifyJWT } = require("../utils/token");

const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnAuthenticatedError("not allowed to visit this route");
  const decode = verifyJWT(token);
  req.user = decode;
  next();
};
module.exports = authenticateUser;
```

Validation of Register request

```js
const validateUserRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await UserModel.findOne({ email });
      if (user) throw new BadRequestError("email already exist");
    }),
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
```
