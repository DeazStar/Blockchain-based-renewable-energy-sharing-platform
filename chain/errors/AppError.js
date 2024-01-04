class AppError extends Error {
  constructor(statusCode, errorMessage) {
    super(errorMessage);
    this.isOperational = true;
    this.statusCode = statusCode;
    this.status = statusCode.toString().startsWith('5') ? 'error' : 'failure';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
