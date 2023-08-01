import { FastifyInstance } from 'fastify';

import { Routes } from '@interfaces/routes.interface';

import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UserRoute from '@routes/user.route';

export const initializeRoutes = (server: FastifyInstance, _: unknown, done: () => void) => {
  // add the new routes here
  const routes = [new IndexRoute(), new UserRoute(), new AuthRoute()];
  routes.forEach((route: Routes) => {
    server.register(route.initializeRoutes.bind(route));
  });
  done();
};
