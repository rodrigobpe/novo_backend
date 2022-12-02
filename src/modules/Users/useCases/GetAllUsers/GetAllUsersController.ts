import { Request,Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController{
    async handle(req:Request,res:Response){
        const getAllUsersUseCase = new GetAllUsersUseCase()
        const users = await getAllUsersUseCase.execute()
        return res.status(200).json({
            message:'Get all users',
            qtd_usuarios: users.length,
            users
        })
    }
}