import { Router } from 'express';
import { quotationRouter } from './quotation-router.ts';

const routes = Router();

routes.use('/quotation', quotationRouter);

export default routes;
