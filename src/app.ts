import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrorMiddleware } from './middlewares/handleErrors.middlewares';
import { courseRouter } from './routers/course.router';
import { sessionLoginRouter } from './routers/session.router';
import { userRouter } from './routers/user.router';

const app: Application = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', sessionLoginRouter);
app.use('/courses', courseRouter);

app.use(handleErrorMiddleware); //Último da aplicação

export default app;
