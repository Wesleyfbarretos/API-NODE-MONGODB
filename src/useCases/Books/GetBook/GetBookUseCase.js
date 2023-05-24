import { BooksRepository } from "../../../infra/database/mongoDB/repositories/BooksRepository.js";

export class GetBookUseCase {
	static async execute(title) {
		return await BooksRepository.findOne(title);
	}
}