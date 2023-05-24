import { AuthorsRepository } from "../../../infra/database/mongoDB/repositories/AuthorsRepository.js";

export class GetAuthorsByIdUseCase {
	static async execute(id) {
		return await AuthorsRepository.findOne(id);
	}
}