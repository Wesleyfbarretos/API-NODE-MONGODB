import { AuthorsRepository } from "../../../infra/database/mongoDB/repositories/AuthorsRepository.js";

export class CreateAuthorsUseCase {
	static async execute(newAuthorRequest) {
	  const newAuthor = await AuthorsRepository.save(newAuthorRequest);

		return {
			id: newAuthor._id,
			name: newAuthor.name,
			nationality: newAuthor.nationality,
		}
	}
}