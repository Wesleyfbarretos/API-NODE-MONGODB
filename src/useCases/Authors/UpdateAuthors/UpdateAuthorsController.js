import { StatusCodes } from 'http-status-codes';
import { UpdateAuthorsUseCase } from './UpdateAuthorsUseCase.js';

export class UpdateAuthorsController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await UpdateAuthorsUseCase.execute(id, req.body);
    res.status(StatusCodes.OK).json(response);
  }
}
