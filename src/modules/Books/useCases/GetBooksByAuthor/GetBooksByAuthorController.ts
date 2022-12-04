import { Request, Response } from "express";
import { GetBooksByAuthorUseCase } from "./GetBooksByAuthorUseCase";

export class GetBooksByAuthorController{
    async handle(req:Request,res:Response){
        const {s,take,skip} = req.query
        const getBooksByAuthorUseCase = new GetBooksByAuthorUseCase()
        const result = await getBooksByAuthorUseCase.execute(String(s),Number(take),Number(skip))
        return res.status(200).json(result)
    }
}