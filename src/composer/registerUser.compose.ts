import { RegisterUserController } from "../controller/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";
import { LoginController } from "../controller/LoginUser.controller";

const userRepository = new UserRepository();
const registerUser = new RegisterUserController(userRepository);

const loginUser = new LoginController(userRepository);
export { registerUser, loginUser };
