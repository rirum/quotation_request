import { Request, Response } from 'express';
import { AuthenticationRequest } from '../middlewares/authentication-request.ts';
import quotationService from '../service/quotation-service.ts';
import { unauthorizedError } from '../errors/unauthorized-error.ts';

export async function postQuotation(req: AuthenticationRequest, res: Response) {
  try {
    const quotationData = req.body;
    const userId = req.userId;

    if (!userId) throw unauthorizedError();
    if (!quotationData) {
      return res.status(400).json({ error: 'Dados de orçamento ausente' });
    }
    const quote = await quotationService.postQuotation(quotationData, userId);
    return res.status(201).json(quote);
  } catch (error) {
    console.log(error);
  }
}

export async function getLastQuotationNumber(req: Request, res: Response) {
  try {
    const lastQuotationNumber = await quotationService.getLastQuotationNumber();

    return res.status(201).json(lastQuotationNumber);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter último número de orçamento' });
  }
}
