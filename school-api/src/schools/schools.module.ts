import { Module } from '@nestjs/common';
import { SchoolsService } from './services/schools.service';
import { SchoolsController } from './controllers/schools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Member } from 'src/models/member.model';
import { Address } from 'src/models/address.model';
import { SchoolAddress } from 'src/models/school-address.model';
import { MemberRole } from 'src/models/member-role.model';
import { Settings } from 'src/models/settings.model';
import { EducationLevel } from 'src/models/education-level.model';
import { School } from 'src/models/school.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Member, Address, SchoolAddress, MemberRole, Settings, EducationLevel, School])],
  providers: [SchoolsService],
  controllers: [SchoolsController]
})
export class SchoolsModule {}
