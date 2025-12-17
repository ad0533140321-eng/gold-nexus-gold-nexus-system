-- CreateTable
CREATE TABLE "Karat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "purity" DECIMAL(8,4) NOT NULL,

    CONSTRAINT "Karat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Karat_name_key" ON "Karat"("name");
