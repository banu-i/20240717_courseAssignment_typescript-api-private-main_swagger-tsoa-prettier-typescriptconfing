/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';
import UserController from './UserController';
import { StatusCodes } from 'http-status-codes';

// Template - StatsRouter.ts:
// import StatisticsController, {
//   type ISetDeviceInfoBody,
// } from './StatisticsController';

const UserRouter = Router();

/**
 * GET
 */
UserRouter.get('/user/byId', async (req, res) => {
  const controller = new UserController();
  const userId = parseInt(req.query.id as string);
  const result = await controller.getUserById(userId);
  res.status(StatusCodes.OK).json(result);
});

export default UserRouter;
