import { StatusCodes } from 'http-status-codes';
import { GetAuthorsUseCase } from './GetAuthorsUseCase.js';

export class GetAuthorsController {
  static async handle(_, res) {
    const response = await GetAuthorsUseCase.execute();
    res.status(StatusCodes.OK).json(response);
  }
}
