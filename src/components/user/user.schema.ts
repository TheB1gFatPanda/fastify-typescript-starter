import { Type } from '@fastify/type-provider-typebox';
import { FastifySchema } from 'fastify';
import { ERROR400, ERROR401, ERROR404, ERROR409, ERROR500, responseProperty } from '@constants/constants';

export const CreateUserBody = Type.Object({
  email: Type.String({ format: 'email', errorMessage: { format: 'Invalid Email' } }),
  password: Type.String({
    format: 'regex',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])(?=.{8,})',
    errorMessage: {
      pattern: 'password must minimum of 8 characters, 1 uppercase, lowercase, number and a special character'
    }
  })
});

export const CreateUserSchema: FastifySchema = {
  description: 'Create user api',
  tags: ['user'],
  body: CreateUserBody,
  response: {
    201: {
      description: 'Successful create response',
      type: 'object',
      properties: {
        ...responseProperty,
        data: { type: 'object', properties: { email: { type: 'string' } } }
      }
    },
    400: ERROR400,
    409: ERROR409,
    500: ERROR500
  }
};

//-------------------------------------------------------------------------------------------------------------------------

export const GetUserSchema: FastifySchema = {
  description: 'Get user api',
  tags: ['user'],
  response: {
    200: {
      description: 'Successful get response',
      type: 'object',
      properties: {
        ...responseProperty,
        data: { type: 'object', properties: { email: { type: 'string' } } }
      }
    },
    400: ERROR400,
    401: ERROR401,
    404: ERROR404,
    500: ERROR500
  }
};
