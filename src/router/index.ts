import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { authRoute, profileRoute } from "./router.auth";
import { bookRouter, searchRouter } from "./router.book";
import { userRoutes } from "./router.user";

export const routes = Router()

//rotas da API
routes.use("/login",authRoute)

routes.use(isAuthenticated)
routes.use("/users", userRoutes)
routes.use("/books",bookRouter)
routes.use("/search",searchRouter)
routes.use("/profile",profileRoute)


//rotas privadas
