import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class UpdateBooksUseCase {
	static async execute(id, newBookUpdateRequest) {
	  await BooksRepository.update(id, newBookUpdateRequest);
		return {
			message: "book updated"
		}
	}
}
