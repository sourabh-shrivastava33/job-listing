const { StatusCodes } = require("http-status-codes");
const UserModel = require("../model/User");
const { verifyJWT } = require("../utils/token");
const { default: mongoose } = require("mongoose");

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
module.exports = { getCurrentUser };
