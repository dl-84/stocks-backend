/*
  Warnings:

  - You are about to drop the `config` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "config";

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "header" TEXT NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);
