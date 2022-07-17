import { RegisterUserController } from "../controller/Public/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";
import { LoginController } from "../controller/Public/LoginUser.controller";
import { LoginUserService } from "../services/Public/LoginUser.service";
import { RegisterUserService } from "../services/Public/RegisterUser.service";
const userRepository = new UserRepository();

//POST '/USER/LOGIN' - To login and receive a token
const loginUserService = new LoginUserService(userRepository);
const loginUser = new LoginController(loginUserService);

//POST '/USER' - To register
const registerUserService = new RegisterUserService(userRepository);
const registerUser = new RegisterUserController(registerUserService);

export { registerUser, loginUser };
