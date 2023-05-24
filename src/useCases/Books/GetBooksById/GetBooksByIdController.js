import { GetBooksByIdUseCase } from './GetBooksByIdUseCase.js';

export class GetBooksByIdController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await GetBooksByIdUseCase.execute(id);
    res.status(200).json(response);
  }
}
