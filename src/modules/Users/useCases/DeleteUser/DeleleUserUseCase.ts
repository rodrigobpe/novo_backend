import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";


export class DeleleUserUseCase{
    async execute(id:string){
        const userAlreadyExists = await prisma.user.findUnique({
            where:{
                id_usuario:id
            }
        })

        if(!userAlreadyExists){
            throw new AppError("Action not completed, because user doesn't exists")
        }
        const deleteUser = await prisma.user.delete({
            where:{
                id_usuario:id
            }
        })
        return deleteUser
    }
}