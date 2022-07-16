import { CreatePlaylistService } from "../services/CreatePlaylist.service";
import { PlaylistRepository } from "../repository/playlist.repository";
import { CreatePlaylistController } from "../controller/Playlist/CreatePlaylist.controller";

const playlistRepository = new PlaylistRepository();
const createPlaylistService = new CreatePlaylistService(playlistRepository);
const createPlaylistController = new CreatePlaylistController(
  createPlaylistService
);

export { createPlaylistController };
