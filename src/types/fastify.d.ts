import { FastifyReply, FastifyRequest } from 'fastify';
import { Static } from '@fastify/type-provider-typebox';
import { schema } from '@utils/validateEnv';

declare module 'fastify' {
  interface FastifyInstance {
    authenticateUser?: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    config: Static<typeof schema>;
  }
}
