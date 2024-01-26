const { UnAuthenticatedError } = require("../errors/customError");
const { verifyJWT } = require("../utils/token");

const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnAuthenticatedError("not allowed to visit this route");
  const decode = verifyJWT(token);
  req.user = decode;
  next();
};
module.exports = authenticateUser;
