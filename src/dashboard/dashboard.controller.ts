import { Body, Controller, Delete, Get, Global, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { Dashboard } from '@prisma/client';

import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get()
    getConfig(): Promise<Array<Dashboard>> {
        return this.dashboardService.getConfig();
    }

    @Post()
    createDashboard(@Body() dashboard: Dashboard): Promise<Dashboard> {
        return this.dashboardService.createDashboard(dashboard);
    }

    @Put()
    editDashboard(@Body() dashboard: Dashboard): Promise<Dashboard> {
        return this.dashboardService.editDashboard(dashboard);
    }

    @Delete(':id')
    deleteDashboard(@Param('id', ParseIntPipe) id: number): Promise<Dashboard> {
        return this.dashboardService.deleteDashboard(id);
    }
}
