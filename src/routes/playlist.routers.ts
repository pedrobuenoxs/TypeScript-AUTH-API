import { Router } from "express";
const PlaylistRouter = Router();
import Token from "../middleware/auth";
const token = new Token();
import {
  createPlaylistController,
  getAllPlaylistController,
  deletePlaylistController,
  updatePlaylistController,
} from "../composer/Playlist.compose";

PlaylistRouter.post("/", token.auth, async (req, res) => {
  createPlaylistController.handle(req, res);
});

PlaylistRouter.get("/", token.auth, async (req, res) => {
  getAllPlaylistController.handle(req, res);
});

PlaylistRouter.put("/", token.auth, async (req, res) => {
  updatePlaylistController.handle(req, res);
});

PlaylistRouter.delete("/", token.auth, async (req, res) => {
  deletePlaylistController.handle(req, res);
});

export default PlaylistRouter;
