import { PlaylistRepository } from "../repository/playlist.repository";
import Token from "../middleware/auth";

export class GetAllPlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(authHeader: string) {
    try {
      if (!authHeader) throw new Error("Token inválido");
      const auth = new Token();
      const userID = await auth.getTokenUserId(authHeader);
      return await this.repository.getAllPlaylist(userID);
    } catch (error) {
      return error;
    }
  }
}
