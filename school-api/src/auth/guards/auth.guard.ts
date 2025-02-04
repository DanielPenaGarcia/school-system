import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    if (!authorization) {
      return false;
    }
    const [bearer, token] = authorization.split(' ');
    if (bearer !== 'Bearer' || !token) {
      return false;
    }
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userRepository.findOne(
        {
          where: {
            id: payload.id,
          },
          relations: {
            member: true
          }
        },
      )
      console.log(user);
      if (!user) {
        return false;
      }
      request.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}
