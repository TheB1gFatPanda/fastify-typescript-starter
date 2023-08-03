export const responseProperty = {
  version: {
    type: 'string'
  },
  message: {
    type: 'string'
  },
  error: {
    type: 'boolean'
  }
};

const errorResponseProperty = {
  version: {
    type: 'string'
  },
  message: {
    type: 'string'
  },
  error: {
    type: 'boolean'
  }
};

export const ERROR400 = {
  description: 'Bad request',
  type: 'object',
  properties: errorResponseProperty
};

export const ERROR401 = {
  description: 'Unauthorized',
  type: 'object',
  properties: errorResponseProperty
};

export const ERROR403 = {
  description: 'Forbidden Request',
  properties: errorResponseProperty
};

export const ERROR404 = {
  description: 'Not found',
  properties: errorResponseProperty
};

export const ERROR409 = {
  description: 'Conflict',
  properties: errorResponseProperty
};

export const ERROR500 = {
  description: 'Internal Sever Error',
  properties: errorResponseProperty
};
