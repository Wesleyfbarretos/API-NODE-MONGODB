import { GetAuthorsByIdUseCase } from './GetAuthorsByIdUseCase.js';

export class GetAuthorsByIdController {
  static async handle(req, res) {
    const { id } = req.params;
    const response = await GetAuthorsByIdUseCase.execute(id);
    res.status(200).json(response);
  }
}
