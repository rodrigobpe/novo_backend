import { prisma } from "../../../../db/prismaClient"
import { AppError } from "../../../../errors/AppError"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface ITokenResponse{
    user:{
        nome:string
        email:string
    }
    token:string
}


export class AuthLoginUserUseCase {
    async execute(email:string,senha:string) {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if(!user){
            throw new AppError("incorrect email or password")
        }
        const passwordMatch = await bcrypt.compare(senha, user.senha)

        if(!passwordMatch){
            throw new AppError("incorrect email or password")
        }

        const token = jwt.sign({id:user.id_usuario}, process.env.JWT_PASS ?? '', {
            subject:user.id_usuario,
            expiresIn:'8h'
        })

        const responseToken:ITokenResponse ={
            user:{
                email,
                nome: user.nome
            }, token
        }

        return responseToken
    }
}