import { StatusCodes } from 'http-status-codes';
import { DeleteAuthorsUseCase } from './DeleteAuthorsUseCase.js';

export class DeleteAuthorsController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await DeleteAuthorsUseCase.execute(id);
    res.status(StatusCodes.NO_CONTENT).json(response);
  }
}
