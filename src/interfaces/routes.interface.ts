import { FastifyInstance, RouteOptions } from 'fastify';

export interface Routes {
  path: string;
  initializeRoutes: (fastify: FastifyInstance, opts: RouteOptions, done: () => void) => void;
}
