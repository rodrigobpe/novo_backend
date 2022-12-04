import { Request, Response } from "express-serve-static-core";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

export class UpdateBookController{
    async handle(req:Request,res:Response){
        const {caminho_arquivo,idioma,genero} =  req.body
        const updateBookUseCase = new UpdateBookUseCase()
        updateBookUseCase.execute({caminho_arquivo,idioma,genero},Number(req.params.id))
        return res.status(201).json({
            message: "Book updated",
            bookUpdated: {
                type: "GET",
                url: `http:localhost:${process.env.PORT}/books/${req.params.id}`
            }
        })
    }
}