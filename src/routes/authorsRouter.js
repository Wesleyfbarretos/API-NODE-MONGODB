import { Router } from "express";
import { CreateAuthorsController } from "../useCases/Authors/CreateAuthors/CreateAuthorsController.js";
import { DeleteAuthorsController } from "../useCases/Authors/DeleteAuthors/DeleteAuthorsController.js";
import { GetAuthorsController } from "../useCases/Authors/GetAuthors/GetAuthorsController.js";
import { GetAuthorsByIdController } from "../useCases/Authors/GetAuthorsById/GetAuthorsByIdController.js";
import { UpdateAuthorsController } from "../useCases/Authors/UpdateAuthors/UpdateAuthorsController.js";

const authorsRouter = Router();

authorsRouter.get("/", GetAuthorsController.handle);
authorsRouter.get("/:id", GetAuthorsByIdController.handle)
authorsRouter.post("/", CreateAuthorsController.handle)
authorsRouter.delete("/:id", DeleteAuthorsController.handle)
authorsRouter.put("/:id", UpdateAuthorsController.handle)

export { authorsRouter };
