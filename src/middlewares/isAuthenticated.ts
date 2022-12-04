import {Request,Response,NextFunction} from "express";
import { prisma } from "../db/prismaClient";
import { AppError } from "../errors/AppError";
import jwt from 'jsonwebtoken'

type JWToken = {
    id: string
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        throw new AppError("Unauthorized, missing JWT")
    }

    const token = authorization.split(" ")[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JWToken
    const user = await prisma.user.findUnique({
        where: { id_usuario: id }
    })

    if (!user) {
        throw new AppError("Unauthorized User")
    }

    const {senha:_,...loggerUser} = user
    req.user = loggerUser
    next()
}