import { PlaylistRepository } from "../repository/playlist.repository";
import IPlaylist from "../interfaces/playlist.interface";
export class CreatePlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(data: IPlaylist) {
    return data;
  }
}
