-- CreateEnum
CREATE TYPE "QuotationStatus" AS ENUM ('VENDA', 'ORCAMENTO', 'LISTA_DE_ESPERA', 'CANCELADA');

-- AlterTable
ALTER TABLE "quotation_request" ADD COLUMN     "status" "QuotationStatus" NOT NULL DEFAULT 'ORCAMENTO';
