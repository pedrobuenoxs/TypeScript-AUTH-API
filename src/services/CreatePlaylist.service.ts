import { PlaylistRepository } from "../repository/playlist.repository";
import IPlaylist from "../interfaces/playlist.interface";
import Token from "../middleware/auth";
export class CreatePlaylistService {
  constructor(private repository: PlaylistRepository) {}

  async handle(data: IPlaylist, authHeader: string) {
    const { name, genre, musics } = data;

    const auth = new Token();

    try {
      if (!name) throw new Error("Nome é obrigatório");
      if (!genre) throw new Error("Gênero é obrigatório");
      if (!musics) throw new Error("Músicas é obrigatório");
      if (!authHeader) throw new Error("Token é obrigatório");

      const userID = await auth.getTokenUserId(authHeader);
      const getID = new Date().valueOf();
      const playlist: IPlaylist = {
        id: getID,
        user_id: userID,
        name,
        genre,
        musics,
      };
      const playlistAlreadyExist = await this.repository.loadOnePlaylist(
        playlist.name,
        playlist.user_id
      );
      if (playlistAlreadyExist) throw new Error("Essa playlist já foi criada");
      return await this.repository.createPlaylist(playlist);
    } catch (error) {
      return { error: error.message };
    }
  }
}
