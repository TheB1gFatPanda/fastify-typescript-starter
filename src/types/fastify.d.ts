import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    authenticateUser?: (request: FastifyRequest) => Promise<void>;
  }
}
