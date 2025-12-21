/*
  Warnings:

  - Changed the type of `weight` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `estimatedWeight` on the `SecondHandLead` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "weight",
ADD COLUMN     "weight" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "SecondHandLead" DROP COLUMN "estimatedWeight",
ADD COLUMN     "estimatedWeight" DECIMAL(10,2) NOT NULL;
