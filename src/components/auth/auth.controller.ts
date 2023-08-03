import { FastifyReply, FastifyRequest } from 'fastify';

import { LoginUser } from '@components/auth/auth.interface';

import AuthService from '@components/auth/auth.service';

import { customResponse } from '@utils/util';

class AuthController {
  public authService = new AuthService();

  public login = async (req: FastifyRequest<{ Body: LoginUser }>, reply: FastifyReply) => {
    const { email, password } = req.body;

    const data = await this.authService.LoginUser({ email, password }, reply);

    customResponse(reply, { statusCode: 201, data, error: false, message: 'login' });
  };
}

export default AuthController;
