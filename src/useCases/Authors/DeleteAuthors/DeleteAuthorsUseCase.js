import { AuthorsRepository } from "../../../infra/database/mongoDB/repositories/AuthorsRepository.js";

export class DeleteAuthorsUseCase {
	static async execute(id) {
	  await AuthorsRepository.destroy(id);
		return {
			message: `successfully deleted`
		}
	}
}