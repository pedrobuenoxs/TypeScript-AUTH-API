import { Request, Response } from "express";
import { CreatePlaylistService } from "../../services/CreatePlaylist.service";

export class RegisterUserController {
  constructor(private userService: CreatePlaylistService) {}

  async handle(req: Request, res: Response) {
    return { req, res };
  }
}
