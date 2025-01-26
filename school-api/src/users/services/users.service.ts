import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/models/member.model';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<object> {
    const member: Member = await this.memberRepository.findOne({
      where: {
        user: {
          email: email,
          password: password,
        },
      },
      select: {
        user: {
          email: true,
          password: true,
        },
        id: true,
        names: true,
        lastNames: true,
        roles: true,
      },
      relations: {
        user: true,
        roles: true
      },
    });
    const payload = {
      name: `${member.names} ${member.lastNames}`,
      email: member.user.email,
      roles: member.roles.map((ur) => ur.role),
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
