const mongoose = require("mongoose");

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("connected to db...");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectDb;
