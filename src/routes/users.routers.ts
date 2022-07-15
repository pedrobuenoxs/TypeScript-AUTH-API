import { Router } from "express";
const UserRouter = Router();
import { registerUser, loginUser } from "../composer/registerUser.compose";

UserRouter.post("/", async (req, res) => {
  registerUser.handle(req, res);
});

UserRouter.get("/", async (req, res) => {
  loginUser.handle(req, res);
});

export default UserRouter;
