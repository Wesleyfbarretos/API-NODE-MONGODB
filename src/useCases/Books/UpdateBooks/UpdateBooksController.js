import { UpdateBooksUseCase } from './UpdateBooksUseCase.js';

export class UpdateBooksController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await UpdateBooksUseCase.execute(id, req.body);
    res.status(200).json(response);
  }
}
