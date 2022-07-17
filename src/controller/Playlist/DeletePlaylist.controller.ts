import { Request, Response } from "express";
import { DeletePlaylistService } from "../../services/DeletePlaylist.service";

export class DeletePlaylistController {
  constructor(private deletePlaylistService: DeletePlaylistService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    const { id } = req.body;
    try {
      const playlist = await this.deletePlaylistService.handle(id, authToken);
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
