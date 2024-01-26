require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const { StatusCodes } = require("http-status-codes");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(express.static(path.resolve(__dirname, "./client/dist")));
// middleware
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
// routes
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./db");

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.get("/api/v1/health", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "Active",
    time: new Date(Date.now()),
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/users", userRoutes);

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({
    msg: "Route not found",
  });
});
app.use(errorHandlerMiddleware);
async function startServer() {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
