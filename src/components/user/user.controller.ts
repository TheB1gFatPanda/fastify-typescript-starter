import { FastifyReply, FastifyRequest } from 'fastify';

import { CreateUser, GetUser } from '@components/user/user.interface';

import UserService from '@components/user/user.service';

import { customResponse } from '@utils/util';

class UserController {
  public userService = new UserService();

  public createUser = async (req: FastifyRequest<{ Body: CreateUser }>, reply: FastifyReply) => {
    const { email, password } = req.body;

    const data = await this.userService.createUser({ email, password });

    customResponse(reply, { statusCode: 201, data, error: false, message: 'user created' });
  };

  public getUser = async (req: FastifyRequest, reply: FastifyReply) => {
    const { email } = req.user as GetUser;

    const data = await this.userService.getUser({ email });

    customResponse(reply, { statusCode: 200, data, error: false, message: 'get user' });
  };
}

export default UserController;
