import { StatusCodes } from 'http-status-codes';
import { GetAuthorsByIdUseCase } from './GetAuthorsByIdUseCase.js';

export class GetAuthorsByIdController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await GetAuthorsByIdUseCase.execute(id);
    res.status(StatusCodes.OK).json(response);
  }
}
