import { RegisterUserController } from "../controller/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";
import { LoginController } from "../controller/LoginUser.controller";
import { LoginUserService } from "../services/LoginUser.service";
import { RegisterUserService } from "../services/RegisterUser.service";
const userRepository = new UserRepository();

const loginUserService = new LoginUserService(userRepository);
const registerUserService = new RegisterUserService(userRepository);

const registerUser = new RegisterUserController(registerUserService);
const loginUser = new LoginController(loginUserService);
export { registerUser, loginUser };
