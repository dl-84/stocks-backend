import { Injectable } from '@nestjs/common';
import { Stock } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockService {
    constructor(private prismaService: PrismaService) { }

    async getStocksByDashboardId(dashboardId: number): Promise<Array<Stock>> {
        let stocks: Array<Stock> = [];

        await this.prismaService.stock.findMany(
            {
                where: { dashboardId: dashboardId }
            })
            .then(entries => {
                entries.forEach(
                    entry => {
                        stocks.push({
                            dashboardId: entry.dashboardId,
                            figi: entry.figi,
                            currency: entry.currency,
                            description: entry.description,
                            displaySymbol: entry.displaySymbol,
                            isin: entry.isin,
                            mic: entry.mic,
                            shareClassFIGI: entry.shareClassFIGI,
                            symbol: entry.symbol,
                            symbol2: entry.symbol2,
                            type: entry.type,
                        });
                    });
            });

        return stocks;
    }

    async createStock(stock: Stock): Promise<Stock> {
        return await this.prismaService.stock
            .create(
                {
                    data: {
                        dashboardId: stock.dashboardId,
                        figi: stock.figi,
                        currency: stock.currency,
                        description: stock.description,
                        displaySymbol: stock.displaySymbol,
                        isin: stock.isin,
                        mic: stock.mic,
                        shareClassFIGI: stock.shareClassFIGI,
                        symbol: stock.symbol,
                        symbol2: stock.symbol2,
                        type: stock.type,
                    }
                })
            .then(entry => {
                return {
                    dashboardId: entry.dashboardId,
                    figi: entry.figi,
                    currency: entry.currency,
                    description: entry.description,
                    displaySymbol: entry.displaySymbol,
                    isin: entry.isin,
                    mic: entry.mic,
                    shareClassFIGI: entry.shareClassFIGI,
                    symbol: entry.symbol,
                    symbol2: entry.symbol2,
                    type: entry.type,
                };
            });
    }

    async deleteStock(figi: string): Promise<Stock> {
        return await this.prismaService.stock.delete({
            where: {
                figi: figi,
            }
        });
    }

    async deleteAllStocksByDashboardId(dashboardId: number): Promise<any> {
        return await this.prismaService.stock.deleteMany({
            where: {
                dashboardId: dashboardId
            }
        });
    }
}
