import { Request, Response } from "express";
import IUser from "../../interfaces/user.interface";
import { UpdateUserService } from "../../services/UpdateUser.service";
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    try {
      const data: IUser = req.body;
      const playlist = await this.updateUserService.handle(data, authToken);
      res.status(201).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
