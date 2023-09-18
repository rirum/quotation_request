import prisma from '../configs/database-connection.ts';
import { Prisma, Quotation_request } from '@prisma/client';

async function postQuotation(data: Prisma.Quotation_requestCreateInput) {
  return prisma.quotation_request.create({
    data,
  });
}

const quotationRepository = {
  postQuotation,
};

export default quotationRepository;
