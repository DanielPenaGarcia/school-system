import { Body, Controller, Post } from '@nestjs/common';
import { SigInDTO as SignInDTO } from '../inputs/sign-in.dto';
import { AuthService } from '../services/auth.service';
import { SignedUpDTO } from '../outputs/signed-up.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('sign-in')
    async signIn(@Body() body: SignInDTO): Promise<SignedUpDTO> {
        return this.authService.signIn(body.email, body.password);
    }
}
