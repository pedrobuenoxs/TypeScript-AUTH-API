import { PlaylistRepository } from "../repository/playlist.repository";
const playlistRepository = new PlaylistRepository();

import { CreatePlaylistService } from "../services/CreatePlaylist.service";
import { CreatePlaylistController } from "../controller/Playlist/CreatePlaylist.controller";

const createPlaylistService = new CreatePlaylistService(playlistRepository);
const createPlaylistController = new CreatePlaylistController(
  createPlaylistService
);

import { GetAllPlaylistController } from "../controller/Playlist/GetAllPlaylist.controller";
import { GetAllPlaylistService } from "../services/GetAllPlaylist.service";

const getAllPlaylistService = new GetAllPlaylistService(playlistRepository);
const getAllPlaylistController = new GetAllPlaylistController(
  getAllPlaylistService
);
export { getAllPlaylistController, createPlaylistController };
