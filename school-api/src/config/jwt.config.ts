import { environment } from "@env/environment";
import { JwtModuleOptions } from "@nestjs/jwt";

export const jwtOptions: JwtModuleOptions = {
    global: true,
    secret: environment.jwt.secret,
    signOptions: { expiresIn: '1d' }
}