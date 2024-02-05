const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    text: String,
    commentedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = CommentSchema;
