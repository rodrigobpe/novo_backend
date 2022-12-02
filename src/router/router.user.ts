import { Router } from "express";
import { CreateUserController } from "../modules/Users/useCases/CreateUser/CreateUserController";
import { DeleleUserController } from "../modules/Users/useCases/DeleteUser/DeleleUserController";
import { GetAllUsersController } from "../modules/Users/useCases/GetAllUsers/GetAllUsersController";
import { GetUserByIdController } from "../modules/Users/useCases/GetUserById/GetUserByIdController";

const createUserController = new CreateUserController()
const getAllUsersController = new GetAllUsersController()
const getUserByIdController = new GetUserByIdController()
const deleleUserController = new DeleleUserController()
export const userRoutes = Router()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', getAllUsersController.handle)
userRoutes.get('/:id', getUserByIdController.handle)
userRoutes.delete('/:id', deleleUserController.handle)