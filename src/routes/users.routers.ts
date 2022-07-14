import { Router } from "express";
const UserRouter = Router();
import registerUser from "../composer/registerUser.compose";
UserRouter.post("/", registerUser.handle);

UserRouter.get("/", async (req, res) => {
  res.send("Hello world");
});

export default UserRouter;
