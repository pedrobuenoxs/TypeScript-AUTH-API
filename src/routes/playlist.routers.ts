import { Router } from "express";
const PlaylistRouter = Router();

PlaylistRouter.post("/", async (req, res) => {
  res.json("post");
});

PlaylistRouter.get("/", async (req, res) => {
  res.json("get");
});

PlaylistRouter.put("/", async (req, res) => {
  res.json("put");
});

PlaylistRouter.delete("/", async (req, res) => {
  res.json("delete");
});

export default PlaylistRouter;
