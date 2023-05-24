import { DeleteBooksUseCase } from "./DeleteBooksUseCase.js";

export class DeleteBooksController {
	static async handle(req, res) {
		const { id } = req.params
		const response = await DeleteBooksUseCase.execute(id)
		res.status(200).json(response);
	}
}