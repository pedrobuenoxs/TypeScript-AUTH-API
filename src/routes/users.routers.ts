import { Router } from "express";
import { RegisterUserController } from "../controller/RegisterUser.controller";
import { UserRepository } from "../repository/user.repository";
const UserRouter = Router();
const userRepository = new UserRepository();
const registerUser = new RegisterUserController(userRepository);
UserRouter.post("/", registerUser.handle);

UserRouter.get("/", async (req, res) => {
  res.send("Hello world");
});

export default UserRouter;
