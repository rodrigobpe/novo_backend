import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { hashPassword } from "../../../../helpers/hashPassword";
import { IUserDTO } from "../../IUsersDTO";


export class CreateUserUseCase {
    async execute({ email, data_nascimento, sexo, nome, senha }: IUserDTO) {
        const date_format = (date: string)=>{
            const newDate = new Date(date.replaceAll('/', "-")).toISOString()
            return newDate
        }
        const userAlreadyExists = await prisma.user.findUnique({
            where:{
                email
            }
        }) ;
        if (userAlreadyExists) {
            throw new AppError("User already exist")
        }


        const user = await prisma.user.create({
            data:{
                email,
                data_nascimento: date_format(data_nascimento),
                sexo,
                nome,
                senha: await hashPassword(senha),
                isAdmin: false
            }
        })

        return user


    }
}