import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post('sign-in')
    async login(@Body() login: any) {
        return this.usersService.login(login.email, login.password);
    }
}
