/*
  Warnings:

  - You are about to drop the column `grossTotalAmount` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `Invoice` table. All the data in the column will be lost.
  - The `amount` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "grossTotalAmount",
DROP COLUMN "totalAmount",
DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL DEFAULT 0;
