import express, { NextFunction,Request,Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import "express-async-errors"
import { routes } from './router'
import { AppError } from './errors/AppError'

dotenv.config()
export const app = express()

//middlewares
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))

//rotas
app.use(routes)

// tratando erros
app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: 'Error',
            message: err.message
        })
    }

    return res.status(500).json({
        status: "Error",
        message: `Internal server error - ${err.message}`
    })
})
