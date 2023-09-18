import { Router } from 'express';
import { postQuotation } from '../controllers/quotation-controller.ts';

const quotationRouter = Router();
quotationRouter.post('/', postQuotation);

export { quotationRouter };
