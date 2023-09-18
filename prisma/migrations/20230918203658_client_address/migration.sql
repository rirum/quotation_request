/*
  Warnings:

  - You are about to drop the column `client_adress` on the `quotation_request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quotation_request" DROP COLUMN "client_adress",
ADD COLUMN     "client_address" TEXT;
