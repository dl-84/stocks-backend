import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DashboardModule,
    PrismaModule,
  ],
  controllers: [
    DashboardController
  ],
  providers: [
    DashboardService,
    PrismaService,
  ],
})
export class AppModule { }
