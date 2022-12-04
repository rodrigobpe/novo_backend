import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { hashPassword } from "../../../../helpers/hashPassword";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase{
    async execute({senha,nome,email}:UpdateUserDTO,id:string){
        const userAlreadyExists = await prisma.user.findUnique({
            where:{
                id_usuario:id
            }
        })

        if(!userAlreadyExists){
            throw new AppError("User don't exists");
        }
        const updateUser =  await prisma.user.update({
            data:{
                nome,
                senha: await hashPassword(senha),
                email
            },
            where:{
                id_usuario:id
            }
        })

        return updateUser
    }
}