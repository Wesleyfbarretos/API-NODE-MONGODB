import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class CreateBooksUseCase {
	static async execute(newBookRequest) {
		const book = await BooksRepository.findOne(newBookRequest.title)
		if(book && book.author === newBookRequest.author) {
			return {
				message: "book already exist"
			}
		}

	  const newBook = await BooksRepository.save(newBookRequest);

		return {
			id: newBook._id,
			title: newBook.title,
			author: newBook.author,
			publisher: newBook.publisher,
			numberOfPage: newBook.numberOfPages
		}
	}
}