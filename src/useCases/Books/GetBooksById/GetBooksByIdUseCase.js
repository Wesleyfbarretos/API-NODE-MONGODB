import { NotFoundError } from '../../../helpers/ApiErrors.js';
import { BooksRepository } from '../../../infra/database/mongoDB/repositories/BooksRepository.js';

export class GetBooksByIdUseCase {
  static async execute(id) {
    const book = await BooksRepository.findOne(id);

    if (!book) {
      throw new NotFoundError('book not found');
    }
  }
}
