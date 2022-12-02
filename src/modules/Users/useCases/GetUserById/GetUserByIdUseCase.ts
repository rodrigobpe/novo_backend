import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class GetUserByIdUseCase{
    async execute(id:string){
        const user = await prisma.user.findUnique({
            where:{id_usuario:id},
        })

        if(!user){
            throw new AppError("This user doesn't exists");
        }

        return user
    }
}