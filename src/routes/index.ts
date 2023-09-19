import { Router } from 'express';
import { quotationRouter } from './quotation-router.ts';
import { userRouter } from './user-router.ts';

const routes = Router();

routes.use('/quotation', quotationRouter);
routes.use('/user', userRouter);

export default routes;
