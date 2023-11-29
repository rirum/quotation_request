import prisma from '../configs/database-connection.ts';
import { Prisma, Quotation_request } from '@prisma/client';

async function postQuotation(data: Prisma.Quotation_requestCreateInput) {
  return prisma.quotation_request.create({
    data,
  });
}

async function getLastQuotationNumber() {
  return prisma.quotation_request.findFirst({
    select: {
      quotation_number: true,
    },
    orderBy: {
      quotation_number: 'desc',
    },
    where: {
      quotation_number: {
        not: null,
      },
    },
  });
}

async function getAllQuotations() {
  return prisma.quotation_request.findMany();
}

const quotationRepository = {
  postQuotation,
  getLastQuotationNumber,
  getAllQuotations,
};

export default quotationRepository;
