import { DeleteAuthorsUseCase } from "./DeleteAuthorsUseCase.js";


export class DeleteAuthorsController {
	static async handle(req, res) {
		const { id } = req.params
		const response = await DeleteAuthorsUseCase.execute(id)
		res.status(200).json(response);
	}
}