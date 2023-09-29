import Joi from 'joi';
import { QuoteType } from '../service/quotation-service.ts';

export const QuoteSchema = Joi.object<QuoteType>({
  quotation_date: Joi.date().iso(),
  quotation_number: Joi.number(),
  client_name: Joi.string().required(),
  client_email: Joi.string().email(),
  client_address: Joi.string(),
  quotation_description: Joi.string(),
  project_preview: Joi.string(),
  quotation_total_amount: Joi.number().required(),
  quotation_method_payment: Joi.string(),
});
