import { PrismaClient } from "@prisma/client";
import { seedUsers } from "../fakeData";
import { hashPassword } from "../src/helpers/hashPassword";

const prisma = new PrismaClient()

const date_format = (date: string)=>{
    const newDate = new Date(date.replaceAll('/', "-")).toISOString()
    return newDate
}

async function main():Promise<void> {
    for(let user of seedUsers){
        await prisma.user.create({
            data:{
                email:user.email,
                data_nascimento: date_format(user.data_nascimento),
                sexo: user.sexo,
                nome: user.nome,
                senha: await hashPassword(user.senha),
                isAdmin: user.isAdmin
            }
        })
    }
}

main()

