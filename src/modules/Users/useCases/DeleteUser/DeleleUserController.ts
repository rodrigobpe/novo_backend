import { Request, Response } from "express";
import { DeleleUserUseCase } from "./DeleleUserUseCase";

export class DeleleUserController{
    async handle(req:Request,res:Response){
        const deleleUserUseCase = new DeleleUserUseCase()
        const userDelete = await deleleUserUseCase.execute(req.params.id)
        return res.status(200).json({
            message:"User deleted"
        })
    }
}