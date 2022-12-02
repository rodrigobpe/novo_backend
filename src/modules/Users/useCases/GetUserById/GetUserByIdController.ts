import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController{
    async handle(req:Request,res:Response){
        const getUserByIdUseCase = new GetUserByIdUseCase()
        const user = await getUserByIdUseCase.execute(req.params.id)
        return res.status(200).json({
            message:"Get user by id",
            user
        })
    }
}