import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, UsersModule, SchoolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
