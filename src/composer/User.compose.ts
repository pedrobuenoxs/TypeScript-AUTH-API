import { RegisterUserController } from "../controller/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";
import { LoginController } from "../controller/LoginUser.controller";
import { LoginUserService } from "../services/LoginUser.service";

const userRepository = new UserRepository();
const registerUser = new RegisterUserController(userRepository);

const userService = new LoginUserService(userRepository);
const loginUser = new LoginController(userService);
export { registerUser, loginUser };
