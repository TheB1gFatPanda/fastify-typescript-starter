import { FastifyReply, FastifyRequest } from 'fastify';

import { LoginUser } from '@interfaces/auth.interface';

import AuthService from '@services/auth.service';

import { customResponse } from '@utils/util';

class AuthController {
  public authService = new AuthService();

  public login = async (req: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = req.body as LoginUser;

    const data = await this.authService.LoginUser({ email, password }, reply);

    customResponse(reply, { statusCode: 201, data, error: false, message: 'login' });
  };
}

export default AuthController;
