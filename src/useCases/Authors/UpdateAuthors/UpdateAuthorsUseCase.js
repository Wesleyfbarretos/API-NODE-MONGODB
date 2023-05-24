import { AuthorsRepository } from "../../../infra/database/mongoDB/repositories/AuthorsRepository.js";

export class UpdateAuthorsUseCase {
	static async execute(id, newBookUpdateRequest) {
	  await AuthorsRepository.update(id, newBookUpdateRequest);
		return {
			message: "author updated"
		}
	}
}
