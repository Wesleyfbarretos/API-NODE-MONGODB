import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class getBooksUseCase {
	static async execute() {
		return await BooksRepository.findAll();
	}
}