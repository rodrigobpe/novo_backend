import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController{
    async handle(req:Request,res:Response){
        const {nome,senha,email} = req.body
        const updateUserUseCase = new UpdateUserUseCase()
        const user = updateUserUseCase.execute({nome,senha,email},req.params.id);
        return res.status(201).json({
            message:"User updated"
        })
    }
}