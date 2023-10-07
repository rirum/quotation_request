-- AlterTable
CREATE SEQUENCE quotation_request_quotation_number_seq;
ALTER TABLE "quotation_request" ALTER COLUMN "quotation_number" SET DEFAULT nextval('quotation_request_quotation_number_seq');
ALTER SEQUENCE quotation_request_quotation_number_seq OWNED BY "quotation_request"."quotation_number";
