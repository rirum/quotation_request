import { Router } from 'express';
import { signIn, postUser } from '../controllers/user-controller.ts';
import { validateBody } from '../middlewares/validation-middleware.ts';
import { createUserSchema } from '../schemas/user-schema.ts';
import { signInSchema } from '../schemas/signin-schema.ts';

const userRouter = Router();
userRouter.post('/signup', validateBody(createUserSchema), postUser);
userRouter.post('/signin', validateBody(signInSchema), signIn);

export { userRouter };
