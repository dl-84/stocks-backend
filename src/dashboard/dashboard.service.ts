import { Injectable } from '@nestjs/common';
import { Dashboard } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {


    constructor(private prismaService: PrismaService) { }

    async getConfig(): Promise<Array<Dashboard>> {
        let pages: Array<Dashboard> = [];

        await this.prismaService.dashboard.findMany()
            .then(entries => {
                entries.forEach(
                    entry => {
                        pages.push({ id: entry.id, header: entry.header });
                    });
            });

        return pages;
    }

    async createDashboard(dashboard: Dashboard): Promise<Dashboard> {
        return await this.prismaService.dashboard
            .create(
                { data: { header: dashboard.header } })
            .then(entry => {
                return { id: entry.id, header: entry.header };
            });
    }

    async editDashboard(dashboard: Dashboard): Promise<Dashboard> {
        return await this.prismaService.dashboard.update({
            where: { id: dashboard.id },
            data: { header: dashboard.header }
        });
    }

    async deleteDashboard(id: number): Promise<Dashboard> {
        return await this.prismaService.dashboard.delete({
            where: { id: id }
        });
    }
}
