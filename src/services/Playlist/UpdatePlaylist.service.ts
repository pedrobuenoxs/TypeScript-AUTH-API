import { PlaylistRepository } from "../../repository/playlist.repository";
import IPlaylist from "../../interfaces/playlist.interface";
import Token from "../../middleware/auth";
export class UpdatePlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(data: IPlaylist, authHeader: string) {
    const { id, name, genre, musics } = data;

    const auth = new Token();

    try {
      if (!id) throw new Error("Id é obrigatório");
      if (!name) throw new Error("Nome é obrigatório");
      if (!genre) throw new Error("Gênero é obrigatório");
      if (!musics) throw new Error("Músicas é obrigatório");
      if (!authHeader) throw new Error("Token é obrigatório");

      const userID = await auth.getTokenUserId(authHeader);
      return await this.repository.editOnePlaylist(id, userID, data);
    } catch (error) {
      return { error: error.message };
    }
  }
}
