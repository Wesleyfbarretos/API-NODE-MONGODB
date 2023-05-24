import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class GetBooksByIdUseCase {
	static async execute(id) {
		return await BooksRepository.findOne(id);
	}
}