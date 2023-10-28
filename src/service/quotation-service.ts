import { Prisma, QuotationStatus } from '@prisma/client';
import quotationRepository from '../repositories/quotation-repository.ts';
import prisma from '../configs/database-connection.ts';

async function postQuotation(
  data: Prisma.Quotation_requestCreateInput,
  userId?: number
) {
  try {
    const createQuote: Prisma.Quotation_requestCreateInput = {
      ...data,
      users: { connect: { id: userId } },
    };

    const postQuote = await quotationRepository.postQuotation(createQuote);
    return postQuote;
  } catch (error) {
    console.log(error.message);
  }
}

async function getLastQuotationNumber() {
  try {
    return await quotationRepository.getLastQuotationNumber();
  } catch (error) {
    console.log(error.message);
  }
}

export type QuoteType = {
  id: number;
  quotation_date: Date;
  quotation_number?: number;
  client_name: string;
  client_email?: string;
  client_address?: string;
  quotation_description?: string;
  project_preview?: string;
  quotation_total_amount: string;
  quotation_method_payment?: string;
  userId: number;
  status: QuotationStatus;
};

const quotationService = {
  postQuotation,
  getLastQuotationNumber,
};

export default quotationService;
