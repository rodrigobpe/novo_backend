import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { authRoute, profileRoute } from "./router.auth";
import { bookRouter } from "./router.book";
import { userRoutes } from "./router.user";

export const routes = Router()

//rotas da API
routes.use("/login",authRoute)
routes.use("/users", userRoutes)
routes.use("/books",bookRouter)
routes.use("/profile",isAuthenticated,profileRoute)

//rotas privadas
