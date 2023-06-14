import { Router } from 'express';
import { sessionLoginController } from '../controllers/session.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middlewares';
import { sessionLoginCreateSchema } from '../schemas/session.schema';

export const sessionLoginRouter: Router = Router();

sessionLoginRouter.post('', validateBodyMiddleware(sessionLoginCreateSchema), sessionLoginController);
