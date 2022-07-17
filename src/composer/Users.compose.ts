import { UserRepository } from "../repository/user.repository";
const userRepository = new UserRepository();

import { CreateUserUserService } from "../services/CreateUser.service";
import { CreateUserController } from "../controller/User/CreateUser.controller";

const createUserService = new CreateUserUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

import { GetAllUsersService } from "../services/GetAllUsers.service";
import { GetAllUsersController } from "../controller/User/GetAllUser.controller";

const getAllUserService = new GetAllUsersService(userRepository);
const getAllUserController = new GetAllUsersController(getAllUserService);

export { createUserController, getAllUserController };
