const multer = require("multer");
const path = require("path");
const DataParser = require("datauri/parser.js");
const storage = multer.memoryStorage();
const parser = new DataParser();
const formateFile = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};
const upload = multer({ storage });
module.exports = { upload, formateFile };
