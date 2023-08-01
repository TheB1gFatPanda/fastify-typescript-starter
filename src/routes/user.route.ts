import { Routes } from '@interfaces/routes.interface';
import { RouteOptions } from 'fastify';
import UserController from '@controllers/user.controller';

import { GetUserSchema } from '@schema/user.schema';
import { CustomFastifyInstance } from '@/interfaces/common.interface';

class UserRoute implements Routes {
  public path = '/user';

  public userController = new UserController();

  public initializeRoutes(fastify: CustomFastifyInstance, opts: RouteOptions, done: () => void) {
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
