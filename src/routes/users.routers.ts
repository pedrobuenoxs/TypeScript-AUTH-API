import { Router } from "express";
const UsersRouter = Router();

UsersRouter.post("/", async (req, res) => {
  res.json("post");
});

UsersRouter.get("/", async (req, res) => {
  res.json("get");
});

UsersRouter.put("/", async (req, res) => {
  res.json("put");
});

UsersRouter.delete("/", async (req, res) => {
  res.json("delete");
});

export default UsersRouter;
