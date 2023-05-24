import { getBooksUseCase } from "./GetBooksUseCase.js";

export class GetBooksController {
	static async handle(_, res) {
		const response = await getBooksUseCase.execute();
		res.status(200).json(response);
	}
}