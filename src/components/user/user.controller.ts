import { FastifyRequest } from 'fastify';

import { CreateUser, GetUser } from '@components/user/user.interface';

import UserService from '@components/user/user.service';

class UserController {
  public userService = new UserService();

  public createUser = async (req: FastifyRequest<{ Body: CreateUser }>) => {
    const { email, password } = req.body;

    const data = await this.userService.createUser({ email, password });

    return { data, message: 'user created' };
  };

  public getUser = async (req: FastifyRequest) => {
    const { email } = req.user as GetUser;

    const data = await this.userService.getUser({ email });

    return { data, message: 'get user' };
  };
}

export default UserController;
