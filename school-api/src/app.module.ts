import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { SchoolsModule } from './schools/schools.module';
import { User } from './models/user.model';
import { Member } from './models/member.model';
import { Address } from './models/address.model';
import { SchoolAddress } from './models/school-address.model';
import { MemberRole } from './models/member-role.model';
import { Settings } from './models/settings.model';
import { EducationLevel } from './models/education-level.model';
import { School } from './models/school.model';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from './config/jwt.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/guards/auth.guard';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([
      User,
      Member,
      Address,
      SchoolAddress,
      MemberRole,
      Settings,
      EducationLevel,
      School,
    ]),
    JwtModule.register(jwtOptions),
    SchoolsModule,
    UsersModule,
    AuthModule,
    SettingsModule
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard   }],
})
export class AppModule {}
