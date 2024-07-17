import { Router } from 'express';
import TodosRouter from './todos';
import StatisticsRouter from './stats/StatisticsRouter';
import UsersRouter from './users/UserRouter';
import server from '../server';

const AppRouter = Router();

AppRouter.use('/todos', TodosRouter);
AppRouter.use('/stats', StatisticsRouter);
AppRouter.use('/users', UsersRouter);


AppRouter.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

export default AppRouter;
