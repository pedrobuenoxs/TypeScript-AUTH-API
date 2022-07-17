import { Request, Response } from "express";
import { GetAllPlaylistService } from "../../services/GetAllPlaylist.service";

export class GetAllPlaylistController {
  constructor(private getAllPlaylistService: GetAllPlaylistService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    try {
      const playlist = await this.getAllPlaylistService.handle(authToken);
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
