import { Get, Injectable } from '@nestjs/common';

export interface DashboardPageDto {
  header: string;
}

@Injectable()
export class AppService {
  pages: DashboardPageDto[] = [
    {
      header: 'Wussi 1'
    },
    {
      header: 'Wussi 2'
    },
    {
      header: 'Wussi 3'
    }];


  getHello(): DashboardPageDto[] {
    return this.pages;
  }
}
