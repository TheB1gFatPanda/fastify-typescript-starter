import { FastifyInstance, RouteOptions } from 'fastify';

export type CustomResponse<T> = {
  statusCode: number;
  message: string | unknown;
  error: boolean;
} & ({ error: false; data: T } | { error: true });

export interface Routes {
  path: string;
  initializeRoutes: (fastify: FastifyInstance, opts: RouteOptions, done: () => void) => void;
}
