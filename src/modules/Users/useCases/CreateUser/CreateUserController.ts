import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, data_nascimento, sexo, nome, senha,  } = req.body
        const createUserUseCase = new CreateUserUseCase() 
        const user = await createUserUseCase.execute({ email, data_nascimento, sexo, nome, senha })
        return res.status(201).json({
            message: 'user create',
            user
        })


    }
}