import { UserRepository } from "../repository/user.repository";
const userRepository = new UserRepository();

import { CreateUserUserService } from "../services/CreateUser.service";
import { CreateUserController } from "../controller/User/CreateUser.controller";

const createUserService = new CreateUserUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
