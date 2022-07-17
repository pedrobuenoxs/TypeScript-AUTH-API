import { Request, Response } from "express";
import IPlaylist from "../../interfaces/playlist.interface";
import { CreatePlaylistService } from "../../services/Playlist/CreatePlaylist.service";

export class CreatePlaylistController {
  constructor(private createPlaylistService: CreatePlaylistService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    try {
      const data: IPlaylist = req.body;
      const playlist = await this.createPlaylistService.handle(data, authToken);
      res.status(201).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
