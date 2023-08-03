export const responseProperty = {
  message: {
    type: 'string'
  }
};

export const ERROR400 = {
  description: 'Bad request',
  type: 'object',
  properties: responseProperty
};

export const ERROR401 = {
  description: 'Unauthorized',
  type: 'object',
  properties: responseProperty
};

export const ERROR403 = {
  description: 'Forbidden Request',
  properties: responseProperty
};

export const ERROR404 = {
  description: 'Not found',
  properties: responseProperty
};

export const ERROR409 = {
  description: 'Conflict',
  properties: responseProperty
};

export const ERROR500 = {
  description: 'Internal Sever Error',
  properties: responseProperty
};
