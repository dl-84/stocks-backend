import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService, DashboardPageDto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('api/config')
  getHello(): DashboardPageDto[] {
    return this.appService.getHello();
  }
}
