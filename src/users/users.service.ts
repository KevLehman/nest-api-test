import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interface/users.interface';
import { createJWT } from './helpers/jwt';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {}

  login(username, password) {
    return this.userModel.findOne({username}).exec().then(user => {
      if (!user || !user.comparePass(password)) throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
      return {token: createJWT(user)};
    });
  }
}