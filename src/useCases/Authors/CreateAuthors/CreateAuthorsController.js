import { CreateAuthorsUseCase } from './CreateAuthorsUseCase.js';

export class CreateAuthorsController {
  static async handle(req, res) {
    const response = await CreateAuthorsUseCase.execute(req.body);
    res.status(201).json(response);
  }
}
