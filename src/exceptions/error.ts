// eslint-disable-next-line max-classes-per-file
export class NotFound extends Error {
  statusCode: number;

  constructor(message = 'Not found') {
    super(message);
    this.statusCode = 404;
  }
}

export class Conflict extends Error {
  statusCode: number;

  constructor(message = 'Conflict') {
    super(message);
    this.statusCode = 409;
  }
}

export class Unauthorized extends Error {
  statusCode: number;

  constructor(message = 'Unauthorized') {
    super(message);
    this.statusCode = 401;
  }
}

export class BadRequest extends Error {
  statusCode: number;

  constructor(message = 'Bad Request') {
    super(message);
    this.statusCode = 400;
  }
}

export class Forbidden extends Error {
  statusCode: number;

  constructor(message = 'Forbidden') {
    super(message);
    this.statusCode = 403;
  }
}
