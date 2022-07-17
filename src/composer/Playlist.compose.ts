import { PlaylistRepository } from "../repository/playlist.repository";
const playlistRepository = new PlaylistRepository();

import { CreatePlaylistService } from "../services/Playlist/CreatePlaylist.service";
import { CreatePlaylistController } from "../controller/Playlist/CreatePlaylist.controller";

const createPlaylistService = new CreatePlaylistService(playlistRepository);
const createPlaylistController = new CreatePlaylistController(
  createPlaylistService
);

import { GetAllPlaylistController } from "../controller/Playlist/GetAllPlaylist.controller";
import { GetAllPlaylistService } from "../services/Playlist/GetAllPlaylist.service";

const getAllPlaylistService = new GetAllPlaylistService(playlistRepository);
const getAllPlaylistController = new GetAllPlaylistController(
  getAllPlaylistService
);

import { DeletePlaylistController } from "../controller/Playlist/DeletePlaylist.controller";
import { DeletePlaylistService } from "../services/Playlist/DeletePlaylist.service";

const deletePlaylistService = new DeletePlaylistService(playlistRepository);
const deletePlaylistController = new DeletePlaylistController(
  deletePlaylistService
);

import { UpdatePlaylistController } from "../controller/Playlist/UpdatePlaylist.controller";
import { UpdatePlaylistService } from "../services/Playlist/UpdatePlaylist.service";

const updatePlaylistService = new UpdatePlaylistService(playlistRepository);
const updatePlaylistController = new UpdatePlaylistController(
  updatePlaylistService
);

export {
  getAllPlaylistController,
  createPlaylistController,
  deletePlaylistController,
  updatePlaylistController,
};
