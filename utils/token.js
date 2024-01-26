const jwt = require("jsonwebtoken");

const createJwt = (paylaod) => {
  const token = jwt.sign(paylaod, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
module.exports = { createJwt, verifyJWT };
