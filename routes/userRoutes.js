const express = require("express");
const {
  getCurrentUser,
  getSingleUser,
} = require("../controllers/userController");
const router = express.Router();
router.route("/current-user").get(getCurrentUser);
router.route("/:userId").get(getSingleUser);
module.exports = router;
