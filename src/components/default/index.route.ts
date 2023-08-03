import { FastifyInstance, RouteOptions } from 'fastify';

import { Routes } from '@interfaces/routes.interface';

import IndexController from '@components/default/index.controller';

class IndexRoute implements Routes {
  public path = '/';

  public indexController = new IndexController();

  public initializeRoutes(fastify: FastifyInstance, opts: RouteOptions, done: () => void) {
    fastify.route({
      method: 'GET',
      url: this.path,
      schema: {
        response: {
          200: {
            description: 'Successful response',
            type: 'string',
            example: 'ok'
          }
        }
      },
      handler: IndexController.index
    });
    done();
  }
}

export default IndexRoute;
