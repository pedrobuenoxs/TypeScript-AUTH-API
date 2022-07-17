import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllUsers.service";

export class GetAllUsersController {
  constructor(private getAllUsersService: GetAllUsersService) {}

  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization || "";
    try {
      const users = await this.getAllUsersService.handle(authToken);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
