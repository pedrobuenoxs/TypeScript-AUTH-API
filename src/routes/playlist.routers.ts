import { Router } from "express";
const PlaylistRouter = Router();
import Token from "../middleware/auth";
const token = new Token();
import {
  createPlaylistController,
  getAllPlaylistController,
} from "../composer/Playlist.compose";

PlaylistRouter.post("/", token.auth, async (req, res) => {
  createPlaylistController.handle(req, res);
});

PlaylistRouter.get("/", token.auth, async (req, res) => {
  getAllPlaylistController.handle(req, res);
});

PlaylistRouter.put("/", token.auth, async (req, res) => {
  res.json("put");
});

PlaylistRouter.delete("/", token.auth, async (req, res) => {
  res.json("delete");
});

export default PlaylistRouter;
