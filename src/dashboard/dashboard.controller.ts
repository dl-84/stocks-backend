import { Body, Controller, Delete, Get, Global, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { Dashboard } from '@prisma/client';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get()
    getConfig(): Promise<Array<Dashboard>> {
        return this.dashboardService.get();
    }

    @Post()
    createDashboard(@Body() dashboard: Dashboard): Promise<Dashboard> {
        return this.dashboardService.create(dashboard);
    }

    @Put(':id')
    editDashboard(@Param('id', ParseIntPipe) id: number, @Body() dashboard: Dashboard): void {
        return this.dashboardService.update(id, dashboard);
    }

    @Delete(':id')
    deleteDashboard(@Param('id', ParseIntPipe) id: number): Promise<Dashboard> {
        return this.dashboardService.delete(id);
    }
}
