import { Router } from "express";
import Token from "../middleware/auth";
import {
  createUserController,
  getAllUserController,
  updateUserController,
} from "../composer/Users.compose";

const UsersRouter = Router();
const token = new Token();

UsersRouter.post("/", token.auth, async (req, res) => {
  createUserController.handle(req, res);
});

UsersRouter.get("/", token.auth, async (req, res) => {
  getAllUserController.handle(req, res);
});

UsersRouter.put("/", token.auth, async (req, res) => {
  updateUserController.handle(req, res);
});

UsersRouter.delete("/", token.auth, async (req, res) => {
  res.json("delete");
});

export default UsersRouter;
