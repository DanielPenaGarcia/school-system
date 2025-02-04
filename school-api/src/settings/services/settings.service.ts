import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from 'src/models/school.model';
import { Settings } from 'src/models/settings.model';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private readonly settingsRepository: Repository<Settings>,
  ) {}

  async findSettingsBySchoolId(id: string) {
    return this.settingsRepository.find({
      where: {
        school: {
          id: id,
        },
      },
      select: {
        id: true,
        educationLevel: {
          id: true,
          name: true,
        },
        school: {
          id: true,
          name: true,
        },
      },
      relations: {
        educationLevel: true,
      },
    });
  }
}
