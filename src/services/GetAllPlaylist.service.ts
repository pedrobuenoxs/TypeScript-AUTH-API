import { PlaylistRepository } from "../repository/playlist.repository";
import IPlaylist from "../interfaces/playlist.interface";

export class GetAllPlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(data: IPlaylist, authHeader: string) {
    return true;
  }
}
