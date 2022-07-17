import { Router } from "express";
const UserRouter = Router();
import {
  registerUser,
  loginUser,
  registerAdminUser,
} from "../composer/User.compose";

UserRouter.post("/", async (req, res) => {
  registerUser.handle(req, res);
});

UserRouter.post("/login", async (req, res) => {
  loginUser.handle(req, res);
});

UserRouter.post("/admin", async (req, res) => {
  registerAdminUser.handle(req, res);
});

export default UserRouter;
