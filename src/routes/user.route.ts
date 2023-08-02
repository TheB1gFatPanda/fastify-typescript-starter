import { Routes } from '@interfaces/routes.interface';
import { FastifyInstance, RouteOptions } from 'fastify';
import UserController from '@controllers/user.controller';

import { GetUserSchema } from '@schema/user.schema';

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
