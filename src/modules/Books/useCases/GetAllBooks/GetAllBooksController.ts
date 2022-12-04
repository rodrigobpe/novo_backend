import { Request, Response } from "express";
import { GetAllBooksUseCase } from "./GetAllBooksUseCase";

export class GetAllBooksController{
    async handle(req:Request,res:Response){
        const getAllBooksUseCase = new GetAllBooksUseCase()
        const books = await getAllBooksUseCase.execute()

        return res.status(200).json({
            qtd_books: books.length,
            books
        })
    }
}