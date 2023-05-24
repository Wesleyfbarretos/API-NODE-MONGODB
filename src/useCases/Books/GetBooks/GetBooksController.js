import { GetBooksUseCase } from "./GetBooksUseCase.js";

export class GetBooksController {
	static async handle(_, res) {
		const response = await GetBooksUseCase.execute();
		res.status(200).json(response);
	}
}