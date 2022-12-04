import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class GetBookByIdUseCase{
    async execute(id:number){
        const book = await prisma.book.findUnique({
            where:{id_livro:id},
        })

        if(!book){
            throw new AppError("This book doesn't exists");
        }

        return book
    }
}