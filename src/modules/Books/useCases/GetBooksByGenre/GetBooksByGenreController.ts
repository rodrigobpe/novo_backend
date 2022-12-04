import { Request, Response } from "express";
import { GetBooksByGenreUseCase } from "./GetBooksByGenreUseCase";

export class GetBooksByGenreController{
    async handle(req:Request,res:Response){
        const {s,take,skip} = req.query
        const getBooksByGenreUseCase = new GetBooksByGenreUseCase()
        const result = await getBooksByGenreUseCase.execute(String(s),Number(take),Number(skip))
        return res.status(200).json(result)
    }
}