import { FastifyInstance, RouteOptions } from 'fastify';

import { Routes } from '@interfaces/routes.interface';

import AuthController from '@components/auth/auth.controller';
import UserController from '@components/user/user.controller';

import { CreateUserSchema } from '@components/user/user.schema';
import { LoginUserSchema } from '@components/auth/auth.schema';

class AuthRoute implements Routes {
  public path = '/auth';

  public userController = new UserController();

  public authController = new AuthController();

  public initializeRoutes(fastify: FastifyInstance, opts: RouteOptions, done: () => void) {
    fastify.route({
      method: 'post',
      url: `${this.path}/signup`,
      schema: CreateUserSchema,
      handler: this.userController.createUser
    });

    fastify.route({
      method: 'post',
      url: `${this.path}/login`,
      schema: LoginUserSchema,
      handler: this.authController.login
    });
    done();
  }
}

export default AuthRoute;
