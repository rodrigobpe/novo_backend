import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { IBookDTO } from "../../IBookDTO";

export class CreateBookUseCase{
    async execute({titulo,sinopse,caminho_arquivo,editora,idioma,ano,autor,genero}:IBookDTO){
        const bookAlreadyexits = await prisma.book.findUnique({
            where:{
                titulo
            }
        })

        if(bookAlreadyexits){
            throw new AppError("Book already exists")
        }

        const book = await prisma.book.create({
            data:{
                titulo,
                sinopse,
                caminho_arquivo,editora,
                idioma,
                ano: new Date(ano).getFullYear(),
                autor,
                genero
            }
        })
        return book
    }
}