import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class DeleteBookUseCase{
    async execute(id:number){
        const bookAlreadyexits = await prisma.book.findUnique({
            where:{
                id_livro:id
            }
        })
        if(!bookAlreadyexits){
            throw new AppError("Action not completed, because book doesn't exists");
        }

        const deleteBook = await prisma.book.delete({
            where:{
                id_livro:id
            }
        })
        return deleteBook
    }
}