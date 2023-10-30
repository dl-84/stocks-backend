import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Stock } from '@prisma/client';

import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) { }

    @Get(':dashboardId')
    getStocksByDashboardId(
        @Param('dashboardId', ParseIntPipe) dashboardId: number): Promise<Array<Stock>> {
        return this.stockService.getStocksByDashboardId(dashboardId);
    }

    @Post()
    createStock(@Body() stock: Stock): Promise<Stock> {
        return this.stockService.createStock(stock);
    }

    @Delete(':figi')
    deleteStockByFigi(@Param('figi') figi: string): Promise<Stock> {
        return this.stockService.deleteStock(figi);
    }

    @Delete()
    deleteAllStocksByDashboardId(
        @Query('dashboardId', ParseIntPipe) dashboardId: number): Promise<Stock> {
        return this.stockService.deleteAllStocksByDashboardId(dashboardId);
    }
}