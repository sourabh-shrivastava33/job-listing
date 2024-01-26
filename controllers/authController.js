const { StatusCodes } = require("http-status-codes");
const UserModel = require("../model/User.js");
const { oneDay } = require("../utils/constant");
const {
  UnAuthenticatedError,
  BadRequestError,
} = require("../errors/customError");
const { hashPassword, comparePassword } = require("../utils/password");
const { createJwt } = require("../utils/token");
const register = async (req, res) => {
  const userExit = await UserModel.find({ email: req.body.email });
  if (userExit) throw new BadRequestError("User Already exist");
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
