import { FastifyInstance } from 'fastify';

export interface CustomFastifyInstance extends FastifyInstance {
  authenticateUser?: () => void;
}
