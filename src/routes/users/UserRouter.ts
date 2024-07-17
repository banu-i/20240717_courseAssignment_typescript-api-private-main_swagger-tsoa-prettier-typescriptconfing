/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';
import UserController from './UserController';
import { IGetUserByIdRequest } from '../../interfaces/routers/UserRequests';

// Template - StatsRouter.ts:
// import StatisticsController, {
//   type ISetDeviceInfoBody,
// } from './StatisticsController';

const UserRouter = Router();

/**
 * GET
 */
UserRouter.get('/userId', (req) => {
  const controller = new UserController();
  return controller.getUserById(req, req.params as IGetUserByIdRequest);
});

export default UserRouter;
