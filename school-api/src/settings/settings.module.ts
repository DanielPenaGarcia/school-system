import { Module } from '@nestjs/common';
import { SettingsController } from './controllers/settings.controller';
import { SettingsService } from './services/settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settings } from 'src/models/settings.model';
import { School } from 'src/models/school.model';

@Module({
  imports: [TypeOrmModule.forFeature([Settings, School])],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule {}
