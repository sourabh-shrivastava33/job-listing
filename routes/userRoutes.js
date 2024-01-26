const express = require("express");
const { getCurrentUser } = require("../controllers/userController");
const router = express.Router();
router.route("/current-user").get(getCurrentUser);
module.exports = router;
