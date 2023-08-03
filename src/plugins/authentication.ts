import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { fastifyPlugin } from 'fastify-plugin';

import prisma from '@utils/prisma';

export const authentication = fastifyPlugin((fastify: FastifyInstance, _: unknown, done: () => void) => {
  const authPreHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const authorization =
        (request.headers.authorization ? request.headers.authorization?.split('Bearer ')[1] : '') || '';

      const payload = fastify.jwt.verify(authorization) as { email: string };

      const getUser = await prisma.user.findUnique({
        where: {
          email: payload.email
        }
      });
      if (!getUser) {
        throw Error();
      }

      request.user = getUser;
    } catch (error) {
      reply.unauthorized();
    }
  };
  fastify.decorate('authenticateUser', authPreHandler);
  done();
});
