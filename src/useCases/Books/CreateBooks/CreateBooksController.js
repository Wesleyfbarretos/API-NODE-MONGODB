import { CreateBooksUseCase } from "./CreateBooksUseCase.js";

export class CreateBooksController {
	static async handle(req, res) {
		const response = await CreateBooksUseCase.execute(req.body);
		res.status(201).json(response);
	}
}