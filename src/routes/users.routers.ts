import { Router } from "express";
const UsersRouter = Router();
import Token from "../middleware/auth";
const token = new Token();

UsersRouter.post("/", token.auth, async (req, res) => {
  res.json("post");
});

UsersRouter.get("/", token.auth, async (req, res) => {
  res.json("get");
});

UsersRouter.put("/", token.auth, async (req, res) => {
  res.json("put");
});

UsersRouter.delete("/", token.auth, async (req, res) => {
  res.json("delete");
});

export default UsersRouter;
