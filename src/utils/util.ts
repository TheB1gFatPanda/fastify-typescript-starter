import { FastifyReply } from 'fastify';

import { CustomResponse } from '@interfaces/routes.interface';

import { API_VERSION } from '@config';

export const customResponse = <T>(reply: FastifyReply, content: CustomResponse<T>) => {
  let messageData = content.message;
  if (content.statusCode === 500) {
    messageData = 'Internal Server Error';
  }

  const body = {
    version: API_VERSION,
    error: content.error,
    ...(!content.error ? { data: content.data } : {}),
    message: messageData
  };

  return reply.status(content.statusCode).send(body);
};
