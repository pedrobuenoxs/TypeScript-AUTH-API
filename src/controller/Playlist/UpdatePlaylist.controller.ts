import { Request, Response } from "express";
import IPlaylist from "../../interfaces/playlist.interface";
import { UpdatePlaylistService } from "../../services/UpdatePlaylist.service";

export class UpdatePlaylistController {
  constructor(private updatePlaylistService: UpdatePlaylistService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    try {
      const data: IPlaylist = req.body;
      const playlist = await this.updatePlaylistService.handle(data, authToken);
      res.status(201).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
