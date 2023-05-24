import { DeleteBookUseCase } from "./DeleteBookUseCase.js";

export class DeleteBookController {
	static async handle(req, res) {
		const { id } = req.params
		const response = await DeleteBookUseCase.execute(id)
		res.status(200).json(response);
	}
}