import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class DeleteBooksUseCase {
	static async execute(id) {
	  await BooksRepository.destroy(id);
		return {
			message: `successfully deleted`
		}
	}
}