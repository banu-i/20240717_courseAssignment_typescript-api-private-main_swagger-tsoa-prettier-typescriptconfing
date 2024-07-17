import {
  Get,
  Body,
  Controller,
  Post,
  Route,
  Request,
  SuccessResponse,
  Tags,
  Query,
} from '@tsoa/runtime';
import { Request as ExpressRequest } from 'express';
import { StatusCodes } from 'http-status-codes';
// import IGetUserByIdRequest from '../../interfaces/routers/UserRequests';
import UserModel from '../../database/models/UserModel';

import { UserAttributes } from '../../interfaces/models/UserAttributes';

export interface ISetUserBody {
  userId: number;
  id?: number;
  name: string;
  email: string;
  // password: string;
  // profileImgUrl?: string;
}
export type ISetDeviceInfoResponse = boolean;

@Route('v1/users')
@Tags('Users')
class UserController extends Controller {
  @Get('/user')
  @SuccessResponse(StatusCodes.OK)
  public async getUserById(
    @Query() id: number,
  ): Promise<UserAttributes | null | Error> {
    if (id) {
      const user = await UserModel.findOne({ where: { id } });
      return user;
    }
    return null;
  }
}

export default UserController;
