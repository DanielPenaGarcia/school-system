import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Member } from 'src/models/member.model';
import { MemberRole } from 'src/models/member-role.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Member, MemberRole])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
