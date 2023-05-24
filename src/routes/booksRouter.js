import { Router } from "express";
import { CreateBooksController } from "../useCases/Books/CreateBooks/CreateBooksController.js";
import { DeleteBookController } from "../useCases/Books/DeleteBook/DeleteBookController.js";
import { GetBookController } from "../useCases/Books/GetBook/GetBookController.js";
import { GetBooksController } from "../useCases/Books/GetBooks/GetBooksController.js";

const booksRouter = Router();

booksRouter.get("/", GetBooksController.handle);
booksRouter.get("/:title", GetBookController.handle)
booksRouter.post("/", CreateBooksController.handle)
booksRouter.delete("/:id", DeleteBookController.handle)

export { booksRouter };
