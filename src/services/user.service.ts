import { hash } from 'bcrypt';

import { CreateUser, GetUser } from '@interfaces/user.interface';

import { HttpException } from '@exceptions/HttpException';

import prisma from '@utils/prisma';

class UserService {
  public db = prisma;

  private saltRounds = 10;

  public async createUser(createData: CreateUser) {
    const checkUserExists = await this.db.user.findUnique({
      where: {
        email: createData.email
      }
    });

    if (checkUserExists) {
      throw new HttpException(409, 'User already exists');
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

  public async getUser(getUserData: GetUser) {
    const findUser = await this.db.user.findUnique({
      where: {
        email: getUserData.email
      }
    });

    if (!findUser) {
      throw new HttpException(404, 'User not found');
    }

    return findUser;
  }
}

export default UserService;
