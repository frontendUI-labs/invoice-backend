/*
  Warnings:

  - Added the required column `price` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `InvoiceItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceItem" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
