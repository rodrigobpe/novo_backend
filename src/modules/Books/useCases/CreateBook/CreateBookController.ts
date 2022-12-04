import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController{
    async handle(req:Request,res:Response){
        const {titulo,sinopse,caminho_arquivo,editora,idioma,ano,autor,genero} = req.body
        const createBookUseCase = new CreateBookUseCase();
        const book = await createBookUseCase.execute({titulo,sinopse,caminho_arquivo,editora,idioma,ano,autor,genero})
        return res.status(201).json({
            message: 'Book created',
            book
        })
    }
}