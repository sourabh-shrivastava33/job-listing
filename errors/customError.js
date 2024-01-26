const { StatusCodes } = require("http-status-codes");
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
class UnAuthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  UnAuthenticatedError,
  UnAuthorizedError,
};
