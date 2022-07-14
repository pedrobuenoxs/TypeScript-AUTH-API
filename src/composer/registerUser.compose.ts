import { RegisterUserController } from "../controller/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";

const userRepository = new UserRepository();
const registerUser = new RegisterUserController(userRepository);

export default registerUser;
