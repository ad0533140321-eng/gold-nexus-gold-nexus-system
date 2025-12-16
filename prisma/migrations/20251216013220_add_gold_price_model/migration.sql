-- CreateTable
CREATE TABLE "GoldPrice" (
    "id" TEXT NOT NULL,
    "currentPrice" DECIMAL(10,3) NOT NULL,
    "previousPrice" DECIMAL(10,3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoldPrice_pkey" PRIMARY KEY ("id")
);
