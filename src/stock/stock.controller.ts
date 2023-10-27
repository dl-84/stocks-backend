import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { Stock } from '@prisma/client';

import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) { }

    @Get(':dashboardId')
    getConfig(@Param('dashboardId', ParseIntPipe) dashboardId: number): Promise<Array<Stock>> {
        return this.stockService.getStockByDashboardId(dashboardId);
    }

    @Post()
    createDashboard(@Body() stock: Stock): Promise<Stock> {
        return this.stockService.createStock(stock);
    }

    @Delete(':figi')
    deleteDashboard(@Param('figi') figi: string): Promise<Stock> {
        return this.stockService.deleteStock(figi);
    }
}