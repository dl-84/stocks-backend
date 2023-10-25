import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DashboardModule } from './dashboard/dashboard.module';
import { PrismaModule } from './prisma/prisma.module';
import { StockModule } from './stock/stock.module';

import { DashboardController } from './dashboard/dashboard.controller';
import { StockController } from './stock/stock.controller';

import { DashboardService } from './dashboard/dashboard.service';
import { PrismaService } from './prisma/prisma.service';
import { StockService } from './stock/stock.service';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DashboardModule,
    PrismaModule,
    StockModule,
  ],
  controllers: [
    DashboardController,
    StockController,
  ],
  providers: [
    DashboardService,
    PrismaService,
    StockService
  ],
})
export class AppModule { }
