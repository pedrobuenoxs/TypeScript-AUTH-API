import { Router } from "express";
const PlaylistRouter = Router();
import Token from "../middleware/auth";
const token = new Token();
import { createPlaylistController } from "../composer/Playlist.compose";

PlaylistRouter.post("/", token.auth, createPlaylistController.handle);

PlaylistRouter.get("/", token.auth, async (req, res) => {
  res.json("get");
});

PlaylistRouter.put("/", token.auth, async (req, res) => {
  res.json("put");
});

PlaylistRouter.delete("/", token.auth, async (req, res) => {
  res.json("delete");
});

export default PlaylistRouter;
