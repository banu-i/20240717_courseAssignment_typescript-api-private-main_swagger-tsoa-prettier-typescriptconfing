import {
  Get,
  Body,
  Controller,
  Post,
  Route,
  Request,
  SuccessResponse,
  Tags,
} from '@tsoa/runtime';
import { Request as ExpressRequest } from 'express';
import { StatusCodes } from 'http-status-codes';
import IGetUserByIdRequest from '../../interfaces/routers/UserRequests';
import UserModel from '../../database/models/UserModel';

//Template - StatsController.ts:
// export interface ISetDeviceInfoBody {
//   userId: number;
//   version: string | null;
//   baseOs: 'ios' | 'android' | 'windows' | 'web';
// }
// export type ISetDeviceInfoResponse = boolean;

@Route('v1/users')
@Tags('Users')
class UserController extends Controller {
  @Get('/userId')
  @SuccessResponse(StatusCodes.OK)
  public async getUserById(@Request() req: ExpressRequest, @Request() params: IGetUserByIdRequest): Promise<UserModel | null> {
    const { userId } = params;
    const user = await UserModel.findByPk(userId);
    return user;
  }
}

export default UserController;
