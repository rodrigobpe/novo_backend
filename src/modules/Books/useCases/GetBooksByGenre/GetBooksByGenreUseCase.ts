import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class GetBooksByGenreUseCase{
    async execute(s:string,take?:number,skip?:number){
        if(s == ''){
            throw new AppError("Nothing Typed")
        }
        const result = await prisma.book.findMany({
            where:{
                genero:{
                    contains:String(s)
                },
            },
            take:Number(take) | 10, // limite de pesquisas, por defaut coloquei 10
            skip:Number(skip) | 0 // quatidade de pesquisas que deve pular
            
        })
        return result
    }
}