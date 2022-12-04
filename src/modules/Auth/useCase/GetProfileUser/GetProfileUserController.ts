import { Request, Response } from "express";

export class GetProfileUserController{
    async handle(req:Request, res:Response){
        return res.status(200).json(req.user)
    }
}