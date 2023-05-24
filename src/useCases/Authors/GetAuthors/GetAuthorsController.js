import { GetAuthorsUseCase } from './GetAuthorsUseCase.js';

export class GetAuthorsController {
  static async handle(_, res) {
    const response = await GetAuthorsUseCase.execute();
    res.status(200).json(response);
  }
}
