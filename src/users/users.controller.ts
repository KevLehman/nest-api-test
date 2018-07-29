import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  findAll(@Body() body) {
    return this.userService.login(body.username, body.password);
  }
}