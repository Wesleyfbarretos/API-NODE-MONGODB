import { GetBookUseCase } from "./GetBookUseCase.js";


export class GetBookController {
	static async handle(req, res) {
		const { title } = req.params
		const response = await GetBookUseCase.execute(title)
		res.status(200).json(response);
	}
}