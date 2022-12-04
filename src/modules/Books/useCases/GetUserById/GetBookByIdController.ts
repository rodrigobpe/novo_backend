import { Request, Response } from "express";
import { GetBookByIdUseCase } from "./GetBookByIdUseCase";


export class GetBookByIdController{
    async handle(req:Request,res:Response){
        const getUserByIdUseCase = new GetBookByIdUseCase()
        const book = await getUserByIdUseCase.execute(Number(req.params.id))
        return res.status(200).json({
            message:"Get book by id",
            book
        })
    }
}