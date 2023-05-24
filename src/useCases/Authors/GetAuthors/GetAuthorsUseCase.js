import { AuthorsRepository } from '../../../infra/database/mongoDB/repositories/AuthorsRepository.js';

export class GetAuthorsUseCase {
  static async execute() {
    return await AuthorsRepository.findAll();
  }
}
