import { Controller, Get, NotFoundException, Param, Req } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from 'src/models/school.model';
import { Repository } from 'typeorm';

@Controller('settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
  ) {}

  @Get('school/:id')
  async findSettingsBySchool(@Param('id') id: string, @Req() req: any) {
    //TODO: Improve this method to return the settings of the school that the user belongs to
    const school = await this.schoolRepository.findOneBy({ member: { id: req.user.member.id } });
    if (!school) {
        throw new NotFoundException('School not found');
    }
    return this.settingsService.findSettingsBySchoolId(school.id);
  }
}
