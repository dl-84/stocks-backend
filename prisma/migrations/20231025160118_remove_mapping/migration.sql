/*
  Warnings:

  - You are about to drop the `dashboards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_dashboardId_fkey";

-- DropTable
DROP TABLE "dashboards";

-- DropTable
DROP TABLE "stocks";

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "header" TEXT NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "currency" TEXT,
    "description" TEXT,
    "displaySymbol" TEXT,
    "figi" TEXT NOT NULL,
    "isin" TEXT,
    "mic" TEXT,
    "shareClassFIGI" TEXT,
    "symbol" TEXT NOT NULL,
    "symbol2" TEXT,
    "type" TEXT,
    "dashboardId" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("figi")
);

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
