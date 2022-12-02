import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class GetAllUsersUseCase{
    async execute(){
        const users = await prisma.user.findMany({
            orderBy:{
                id_usuario:"desc"
            },
            select:{
                senha:false,
                email:true,
                data_nascimento:true,
                nome:true,
                id_usuario:true,
                isAdmin:true,
                sexo:true
            }
        })
        if(users.length == 0){
            throw new AppError("No registered user")
        } 

        return users
    }
}