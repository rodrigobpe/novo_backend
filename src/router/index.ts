import { Router } from "express";
import { userRoutes } from "./router.user";

export const routes = Router()
routes.get('/',(req,res)=>{
    res.send('corno')
})

routes.use("/users", userRoutes)