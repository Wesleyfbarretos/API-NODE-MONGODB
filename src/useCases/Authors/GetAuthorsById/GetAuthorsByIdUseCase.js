import { NotFoundError } from '../../../helpers/ApiErrors.js';
import { AuthorsRepository } from '../../../infra/database/mongoDB/repositories/AuthorsRepository.js';

export class GetAuthorsByIdUseCase {
  static async execute(id) {
    const response = await AuthorsRepository.findOne(id);

    if (!response) {
      throw new NotFoundError('Author not found');
    }
  }
}
