import { Request, Response } from "express";
import IPlaylist from "../../interfaces/playlist.interface";
import { CreatePlaylistService } from "../../services/CreatePlaylist.service";

export class CreatePlaylistController {
  constructor(private userService: CreatePlaylistService) {}

  async handle(req: Request, res: Response) {
    try {
      const data: IPlaylist = req.body;
      const playlist = this.userService.handle(data);
      res.json(playlist).status(200);
    } catch (error) {
      res.json(error).status(400);
    }
  }
}
