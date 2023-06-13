import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrorMiddleware } from './middlewares/handleErrors.middlewares';
import { userLoginRouter, userRouter } from './routers/user.router';
import { courseRouter } from './routers/course.router';

const app: Application = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', userLoginRouter);
app.use('/courses', courseRouter);

app.use(handleErrorMiddleware); //Último da aplicação

export default app;
