import { StatusCodes } from 'http-status-codes';

export class ApiErrors extends Error {
  statusCode;

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiErrors {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class UnauthorizedRequestError extends ApiErrors {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class NotFoundError extends ApiErrors {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class UnprocessableEntityError extends ApiErrors {
  constructor(message) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}
