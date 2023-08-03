import { Routes } from '@interfaces/routes.interface';
import { FastifyInstance, RouteOptions } from 'fastify';
import UserController from '@components/user/user.controller';

import { GetUserSchema } from '@components/user/user.schema';

class UserRoute implements Routes {
  public path = '/user';

  public userController = new UserController();

  public initializeRoutes(fastify: FastifyInstance, opts: RouteOptions, done: () => void) {
    fastify.route({
      method: 'get',
      url: this.path,
      schema: GetUserSchema,
      preHandler: fastify.authenticateUser,
      handler: this.userController.getUser
    });
    done();
  }
}

export default UserRoute;
