import { compare } from 'bcrypt';

import { FastifyReply } from 'fastify';

import { LoginUser } from '@components/auth/auth.interface';

import { HttpException } from '@exceptions/HttpException';

import prisma from '@utils/prisma';

class AuthService {
  public db = prisma;

  public async LoginUser(loginData: LoginUser, reply: FastifyReply) {
    const findUser = await this.db.user.findUnique({
      where: {
        email: loginData.email
      }
    });

    if (!findUser) {
      throw new HttpException(404, 'User not found');
    }

    // compare hashed and password
    const isPasswordMatching: boolean = await compare(loginData.password, findUser.password).catch(() => false);

    if (!isPasswordMatching) {
      throw new HttpException(401, 'Incorrect login credentials');
    }

    // example jwt
    const accessToken = await reply.jwtSign(
      {
        id: findUser.id,
        email: findUser.email
      },
      { sign: { expiresIn: '15m' } }
    );

    return { accessToken };
  }
}

export default AuthService;
