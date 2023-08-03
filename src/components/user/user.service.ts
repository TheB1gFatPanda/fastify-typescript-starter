import { hash } from 'bcrypt';

import { CreateUser, GetUser } from '@components/user/user.interface';

import prisma from '@utils/prisma';
import { FastifyReply } from 'fastify';

class UserService {
  public db = prisma;

  private saltRounds = 10;

  public async createUser(createData: CreateUser, reply: FastifyReply) {
    const checkUserExists = await this.db.user.findUnique({
      where: {
        email: createData.email
      }
    });

    if (checkUserExists) {
      return reply.conflict('User already exists');
    }

    const hashedPassword = await hash(createData.password, this.saltRounds);

    const user = await this.db.user.create({
      data: {
        email: createData.email,
        password: hashedPassword
      },
      select: {
        email: true
      }
    });

    return user;
  }

  public async getUser(getUserData: GetUser, reply: FastifyReply) {
    const findUser = await this.db.user.findUnique({
      where: {
        email: getUserData.email
      }
    });

    if (!findUser) {
      return reply.notFound('User not found');
    }

    return findUser;
  }
}

export default UserService;
