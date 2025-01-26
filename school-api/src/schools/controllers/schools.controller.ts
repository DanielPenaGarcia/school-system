import { Body, Controller, Post } from '@nestjs/common';
import { SchoolsService } from '../services/schools.service';
import { CreateSchoolDTO } from '../inputs/create-school.dto';

@Controller('schools')
export class SchoolsController {

    constructor(private readonly schoolService: SchoolsService) {}

    @Post()
    async createSchool(@Body() createSchool: CreateSchoolDTO) {
        return await this.schoolService.createSchool(createSchool);
    }
}
