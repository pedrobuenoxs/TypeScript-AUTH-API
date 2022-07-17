import { Request, Response } from "express";
import IPlaylist from "../../interfaces/playlist.interface";
import { GetAllPlaylistService } from "../../services/GetAllPlaylist.service";

export class GetAllPlaylistController {
  constructor(private createPlaylistService: GetAllPlaylistService) {}

  async handle(req: Request, res: Response) {
    return true;
  }
}
