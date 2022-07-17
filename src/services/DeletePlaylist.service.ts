import { PlaylistRepository } from "../repository/playlist.repository";
import Token from "../middleware/auth";

export class DeletePlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(id: number, authHeader: string) {
    try {
      if (!authHeader) throw new Error("Token inválido");
      if (!id) throw new Error("Selecione uma playlist");
      const auth = new Token();
      const userID = await auth.getTokenUserId(authHeader);
      const deletePlaylist = await this.repository.deleteOnePlaylist(
        id,
        userID
      );
      if (deletePlaylist.deletedCount === 0)
        throw new Error("Playlist já foi deletada");
      return { message: true };
    } catch (error) {
      return { error: error.message };
    }
  }
}
