import { UnprocessableEntityError } from '../../../helpers/ApiErrors.js';
import { BooksRepository } from '../../../infra/database/mongoDB/repositories/BooksRepository.js';

export class CreateBooksUseCase {
  static async execute(newBookRequest) {
    const book = await BooksRepository.findOneByTitle(newBookRequest.title);
    if (book && String(book.author._id) === String(newBookRequest.author)) {
      throw new UnprocessableEntityError('book already exist');
    }

    const newBook = await BooksRepository.save(newBookRequest);

    return {
      id: newBook._id,
      title: newBook.title,
      author: newBook.author,
      publisher: newBook.publisher,
      numberOfPage: newBook.numberOfPages,
    };
  }
}
