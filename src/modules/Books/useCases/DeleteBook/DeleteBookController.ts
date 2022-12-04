import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

export class DeleteBookController{
    async handle(req:Request,res:Response){
        const deleteBookUseCase = new DeleteBookUseCase()
        await deleteBookUseCase.execute(Number(req.params.id))
        res.status(201).json({
            message: "Book deleted"
        })
    }
}