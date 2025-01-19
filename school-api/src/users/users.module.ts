import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { ServicesController } from './services/services.controller';

@Module({
  controllers: [UsersController, ServicesController]
})
export class UsersModule {}
