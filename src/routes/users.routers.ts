import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/", async (req, res) => {
  res.send({ oi: "oi" });
});

UserRouter.get("/", async (req, res) => {
  res.send("Hello world");
});

export default UserRouter;
