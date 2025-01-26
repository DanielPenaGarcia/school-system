import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Member } from 'src/models/member.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Member])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
