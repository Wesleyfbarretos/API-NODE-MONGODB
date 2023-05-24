import { StatusCodes } from 'http-status-codes';
import { CreateAuthorsUseCase } from './CreateAuthorsUseCase.js';

export class CreateAuthorsController {
  static async handle(req, res) {
    const response = await CreateAuthorsUseCase.execute(req.body);
    res.status(StatusCodes.CREATED).json(response);
  }
}
