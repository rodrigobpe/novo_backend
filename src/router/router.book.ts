import { Router } from "express";
import { CreateBookController } from "../modules/Books/useCases/CreateBook/CreateBookController";
import { DeleteBookController } from "../modules/Books/useCases/DeleteBook/DeleteBookController";
import { GetAllBooksController } from "../modules/Books/useCases/GetAllBooks/GetAllBooksController";
import { GetBooksByAuthorController } from "../modules/Books/useCases/GetBooksByAuthor/GetBooksByAuthorController";
import { GetBooksByGenreController } from "../modules/Books/useCases/GetBooksByGenre/GetBooksByGenreController";
import { GetBookByIdController } from "../modules/Books/useCases/GetUserById/GetBookByIdController";
import { UpdateBookController } from "../modules/Books/useCases/UpdateBook/UpdateBookController";

export const bookRouter = Router()
export const searchRouter = Router()

const createBookController = new CreateBookController()
const getAllBooksController = new GetAllBooksController()
const getBookByIdController = new GetBookByIdController()
const deleteBookController = new DeleteBookController()
const updateBookController = new UpdateBookController()
const getBooksByGenreController = new GetBooksByGenreController()
const getBooksByAuthorController = new GetBooksByAuthorController()
//rotas books

bookRouter.post('/', createBookController.handle)
bookRouter.get('/', getAllBooksController.handle)
bookRouter.get('/:id', getBookByIdController.handle)
bookRouter.delete('/:id', deleteBookController.handle)
bookRouter.patch('/:id', updateBookController.handle)
searchRouter.get('/genre', getBooksByGenreController.handle)
searchRouter.get('/author', getBooksByAuthorController.handle)




