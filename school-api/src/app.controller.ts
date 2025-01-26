import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ByPass } from './decorators/bypass';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ByPass()
  getHello(): string {
    return this.appService.getHello();
  }
}
