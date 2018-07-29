import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})

export class UserModule {}
