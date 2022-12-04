import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

interface IBookUpdateDTO{
    caminho_arquivo?:string,
    idioma?:string,
    genero?:string
}

export class UpdateBookUseCase{
    async execute({caminho_arquivo,idioma,genero}:IBookUpdateDTO,id:number){
        const bookAlreadyexits = await prisma.book.findUnique({
            where:{
                id_livro:id
            }
        })
        if(!bookAlreadyexits){
            throw new AppError("Book don't exists")
        }

        const updateBook = await prisma.book.update({
            data:{
                caminho_arquivo,
                idioma,
                genero
            },
            where:{
                id_livro:id
            }
        })
    }
}