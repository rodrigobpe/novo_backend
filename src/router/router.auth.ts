
import { Router } from "express";
import { AuthLoginUserController } from "../modules/Auth/useCase/AuthLoginUser/AuthLoginUserController";
import { GetProfileUserController } from "../modules/Auth/useCase/GetProfileUser/GetProfileUserController";

const getProfileUserController = new GetProfileUserController()
const authLoginUserController = new AuthLoginUserController()
export const authRoute = Router()
export const profileRoute = Router()

profileRoute.get('/',getProfileUserController.handle)
authRoute.post('/',authLoginUserController.handle)

