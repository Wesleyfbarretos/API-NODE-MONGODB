import { Router } from 'express';
import { CreateBooksController } from '../useCases/Books/CreateBooks/CreateBooksController.js';
import { DeleteBooksController } from '../useCases/Books/DeleteBooks/DeleteBooksController.js';
import { GetBooksController } from '../useCases/Books/GetBooks/GetBooksController.js';
import { GetBooksByIdController } from '../useCases/Books/GetBooksById/GetBooksByIdController.js';
import { UpdateBooksController } from '../useCases/Books/UpdateBooks/UpdateBooksController.js';

const booksRouter = Router();

booksRouter.get('/', GetBooksController.handle);
booksRouter.get('/:id', GetBooksByIdController.handle);
booksRouter.post('/', CreateBooksController.handle);
booksRouter.delete('/:id', DeleteBooksController.handle);
booksRouter.put('/:id', UpdateBooksController.handle);

export { booksRouter };
