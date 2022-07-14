import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/", async (req, res) => {
  return { req, res };
});

UserRouter.get("/", async (req, res) => {
  return { req, res };
});

export default UserRouter;
