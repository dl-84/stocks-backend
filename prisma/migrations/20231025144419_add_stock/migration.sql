/*
  Warnings:

  - You are about to drop the `Dashboard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Dashboard";

-- CreateTable
CREATE TABLE "dashboards" (
    "id" SERIAL NOT NULL,
    "header" TEXT NOT NULL,

    CONSTRAINT "dashboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stocks" (
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

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("figi")
);

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "dashboards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
