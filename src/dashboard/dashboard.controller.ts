import { Body, Controller, Delete, Get, Global, Post, Put, Param } from '@nestjs/common';
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

    @Put(':id')
    editDashboard(@Param('id') id: number, @Body() dashboard: Dashboard): void {
        return this.dashboardService.editDashboard(id, dashboard);
    }

    @Delete(':id')
    deleteDashboard(@Param('id') id: number): Promise<void> {
        return this.dashboardService.deleteDashboard(id);
    }
}
