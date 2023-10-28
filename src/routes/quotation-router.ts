import { Router } from 'express';
import {
  getLastQuotationNumber,
  postQuotation,
} from '../controllers/quotation-controller.ts';
import { authenticateToken } from '../middlewares/authentication-request.ts';
import { validateBody } from '../middlewares/validation-middleware.ts';
import { QuoteSchema } from '../schemas/quote-schema.ts';

const quotationRouter = Router();
quotationRouter.post(
  '/',
  authenticateToken,
  validateBody(QuoteSchema),
  postQuotation
);
quotationRouter.get('/', getLastQuotationNumber);

export { quotationRouter };
