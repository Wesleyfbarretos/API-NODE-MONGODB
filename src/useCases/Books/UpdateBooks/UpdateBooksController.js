import { StatusCodes } from 'http-status-codes';
import { UpdateBooksUseCase } from './UpdateBooksUseCase.js';

export class UpdateBooksController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await UpdateBooksUseCase.execute(id, req.body);
    res.status(StatusCodes.OK).json(response);
  }
}
