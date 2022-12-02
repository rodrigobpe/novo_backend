import { hash } from "bcrypt";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";
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

        const passwordHash = await hash(senha, 8)

        const user = await prisma.user.create({
            data:{
                email,
                data_nascimento: date_format(data_nascimento),
                sexo,
                nome,
                senha: passwordHash,
                isAdmin: false
            }
        })

        return user


    }
}