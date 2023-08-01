import { FastifyReply, FastifyRequest } from 'fastify';

class IndexController {
  public static index = (req: FastifyRequest, reply: FastifyReply): void => {
    reply.send('ok');
  };
}

export default IndexController;
