const express = require("express");
const authenticateUser = require("../middleware/authenticateUserMiddleware");

const {
  getAllJobPost,
  createJobPost,
  editJobPost,
  deleteJobPost,
  getJobPost,
} = require("../controllers/jobController");
const {
  validateJobInput,
  validateParamsId,
} = require("../middleware/validationMiddleware");
const { upload } = require("../middleware/multerMiddleware");
const router = express.Router();

router
  .route("/")
  .get(getAllJobPost)
  .post(
    authenticateUser,
    upload.single("logoUrl"),
    validateJobInput,
    createJobPost
  );
router
  .route("/:id")
  .get(validateParamsId, getJobPost)
  .patch(
    authenticateUser,
    upload.single("logoUrl"),
    validateJobInput,
    validateParamsId,
    editJobPost
  )
  .delete(authenticateUser, validateParamsId, deleteJobPost);
module.exports = router;
