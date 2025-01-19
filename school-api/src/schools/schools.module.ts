import { Module } from '@nestjs/common';
import { SchoolsService } from './services/schools.service';
import { SchoolsController } from './controllers/schools.controller';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService]
})
export class SchoolsModule {}
