-- CreateTable
CREATE TABLE "config" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "header" TEXT NOT NULL,

    CONSTRAINT "config_pkey" PRIMARY KEY ("id")
);
