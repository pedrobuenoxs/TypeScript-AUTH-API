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

import { UpdateUserController } from "../controller/User/UpdateUser.controller";
import { UpdateUserService } from "../services/UpdateUser.service";

const updateUserService = new UpdateUserService(userRepository);
const updateUserController = new UpdateUserController(updateUserService);

import { DeleteUserService } from "../services/DeleteUser.service";
import { DeleteUserController } from "../controller/User/DeleteUser.controller";

const deleteUserService = new DeleteUserService(userRepository);
const deleteUserController = new DeleteUserController(deleteUserService);

export {
  createUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
};
