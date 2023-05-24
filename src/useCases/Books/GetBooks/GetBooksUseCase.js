import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class GetBooksUseCase {
	static async execute() {
		return await BooksRepository.findAll();
	}
}