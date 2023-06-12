import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrorMiddleware } from './middlewares/handleErrors.middlewares';

const app: Application = express();
app.use(express.json());

app.use(handleErrorMiddleware); //Último da aplicação

export default app;
