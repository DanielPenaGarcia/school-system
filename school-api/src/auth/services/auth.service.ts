import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { SignedUpDTO } from '../outputs/signed-up.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<SignedUpDTO> {
    const user: User = await this.userRepository.findOne({
      where: {
        email: email,
        password: password,
      },
      select: {
        id: true,
        email: true,
        member: {
          id: true,
          names: true,
          lastNames: true,
          roles: true,
        },
      },
      relations: {
        member: {
          roles: true,
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const payload = {
      name: `${user.member.names} ${user.member.lastNames}`,
      email: user.email,
      roles: user.member.roles.map((ur) => ur.role),
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      email: user.email,
      name: `${user.member.names} ${user.member.lastNames}`,
    };
  }
}
