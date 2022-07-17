import { Request, Response } from "express";
import { DeleteUserService } from "../../services/User/DeleteUser.service";
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.body;
    try {
      const playlist = await this.deleteUserService.handle(id);
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
