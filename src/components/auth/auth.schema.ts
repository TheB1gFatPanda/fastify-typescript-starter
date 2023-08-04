import { Type } from '@fastify/type-provider-typebox';
import { FastifySchema } from 'fastify';
import { ERROR400, ERROR401, ERROR404, ERROR409, ERROR500, responseProperty } from '@constants/constants';

export const LoginUserBody = Type.Object({
  email: Type.String({ format: 'email', errorMessage: { format: 'Invalid Email' } }),
  password: Type.String()
});

export const LoginUserSchema: FastifySchema = {
  description: 'Login api',
  tags: ['auth'],
  body: LoginUserBody,
  response: {
    201: {
      description: 'Successful login response',
      type: 'object',
      properties: {
        ...responseProperty,
        data: { type: 'object', properties: { accessToken: { type: 'string' } } }
      }
    },
    400: ERROR400,
    401: ERROR401,
    404: ERROR404,
    409: ERROR409,
    500: ERROR500
  }
};
