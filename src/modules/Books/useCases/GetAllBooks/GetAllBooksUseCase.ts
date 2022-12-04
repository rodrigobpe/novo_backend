import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class GetAllBooksUseCase{
    async execute(){
        const books = await prisma.book.findMany({
            orderBy:{
                id_livro:"desc"
            }
        })

        if(books.length == 0){
            throw new AppError("No registered book")
        }

        return books
    }
}