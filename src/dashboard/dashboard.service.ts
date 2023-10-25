import { Injectable } from '@nestjs/common';
import { Dashboard } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
    constructor(private prismaService: PrismaService) { }

    async getDashboards(): Promise<Array<Dashboard>> {
        let dashboards: Array<Dashboard> = [];

        await this.prismaService.dashboard.findMany()
            .then(entries => {
                entries.forEach(
                    entry => {
                        dashboards.push({
                            id: entry.id,
                            header: entry.header
                        });
                    });
            });

        return dashboards;
    }

    async createDashboard(dashboard: Dashboard): Promise<Dashboard> {
        return await this.prismaService.dashboard
            .create(
                {
                    data: {
                        header: dashboard.header
                    }
                })
            .then(entry => {
                return {
                    id: entry.id,
                    header: entry.header
                };
            });
    }

    async updateDashboard(dashboard: Dashboard): Promise<Dashboard> {
        return await this.prismaService.dashboard.update({
            where: {
                id: dashboard.id
            },
            data: {
                header: dashboard.header
            }
        });
    }

    async deleteDashboard(id: number): Promise<Dashboard> {
        return await this.prismaService.dashboard.delete({
            where: {
                id: id
            }
        });
    }
}
