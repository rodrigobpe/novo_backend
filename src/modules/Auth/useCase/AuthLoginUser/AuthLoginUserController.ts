import { Request, Response } from "express";
import { AuthLoginUserUseCase } from "./AuthLoginUserUseCase";

export class AuthLoginUserController{
    async handle(req:Request,res:Response){
        const authLoginUserUseCase = new AuthLoginUserUseCase()
        const {email,senha} = req.body
        const tokenResponse = await authLoginUserUseCase.execute(email,senha)
        return res.json(tokenResponse)
    }
}