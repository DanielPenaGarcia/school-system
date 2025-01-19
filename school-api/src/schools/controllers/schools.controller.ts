import { Body, Controller, Post } from '@nestjs/common';
import { InitSchool } from 'src/models/input/init-school';

@Controller('schools')
export class SchoolsController {

    constructor() {}

    @Post()
    initSchool(@Body() body: InitSchool){
        console.log(body);
        return body;
    }

}
