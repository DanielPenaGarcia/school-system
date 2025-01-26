import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolDTO } from '../inputs/create-school.dto';
import { User } from 'src/models/user.model';
import { Member } from 'src/models/member.model';
import { Address } from 'src/models/address.model';
import { School } from 'src/models/school.model';
import { MemberRole } from 'src/models/member-role.model';
import { Role } from 'src/models/enums/role.enum';
import { Settings } from 'src/models/settings.model';
import { EducationLevel } from 'src/models/education-level.model';
import { SchoolAddress } from 'src/models/school-address.model';

@Injectable()
export class SchoolsService {
    
    constructor(@InjectRepository(School) private readonly schoolService: Repository<School>){}

    async createSchool(createSchoolDTO: CreateSchoolDTO): Promise<School> {
        const user: User = new User();
        user.email = createSchoolDTO.personalInformation.email;
        user.password = 'password';
        const member: Member = new Member();
        member.user = user;
        member.bornDate = new Date(createSchoolDTO.personalInformation.bornDate);
        member.names = createSchoolDTO.personalInformation.names;
        member.lastNames = createSchoolDTO.personalInformation.lastNames;
        member.phoneNumber = createSchoolDTO.personalInformation.phoneNumber;
        const memberRole: MemberRole = new MemberRole();
        memberRole.role = Role.ADMIN;
        member.roles = [memberRole];
        const settings: Settings[] = createSchoolDTO.schoolInformation.educationalLevel.map((level) => {
            const educationalLevel: EducationLevel = new EducationLevel();
            educationalLevel.name = level.name;
            const setting: Settings = new Settings();
            setting.educationLevel = educationalLevel;
            return setting;
        });
        const address: Address = new Address();
        address.city = createSchoolDTO.schoolInformation.city;
        address.country = createSchoolDTO.schoolInformation.country;
        address.street = createSchoolDTO.schoolInformation.street;
        address.zipCode = createSchoolDTO.schoolInformation.zipCode;
        address.state = createSchoolDTO.schoolInformation.state;
        const schoolAddress: SchoolAddress = new SchoolAddress();
        schoolAddress.address = address;
        const school: School = new School();
        school.name = createSchoolDTO.schoolInformation.name;
        school.member = member;
        school.schoolAddresses = [schoolAddress];
        school.settings = settings;
        return await this.schoolService.save(school);
    }
}
