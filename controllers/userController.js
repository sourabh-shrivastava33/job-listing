const { StatusCodes } = require("http-status-codes");
const UserModel = require("../model/User");
const { verifyJWT } = require("../utils/token");
const { default: mongoose } = require("mongoose");
const { BadRequestError } = require("../errors/customError");

const getCurrentUser = async (req, res) => {
  if (!req.cookies.token) {
    return res.status(StatusCodes.OK).json({ user: null });
  }
  const decode = verifyJWT(req.cookies.token);
  const user = await UserModel.findById({
    _id: new mongoose.Types.ObjectId(decode.id),
  });
  const newUser = user.toJson();
  res.status(StatusCodes.OK).json({ user: newUser });
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId, {
    password: 0,
    _id: 0,
  });
  if (!user) throw BadRequestError(`No user with ${userId} id`);
  res.status(StatusCodes.OK).json(user);
};

module.exports = { getCurrentUser, getSingleUser };
