import { Request, Response } from "express";
import { RegisterAdminUserService } from "../../services/Public/RegisterAdminUser.service";

export class RegisterAdminUserController {
  constructor(private userService: RegisterAdminUserService) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const user = await this.userService.handle(name, email, password);
      res.json(user).status(201);
    } catch (error) {
      return res.json({ error: error.message }).status(400);
    }
  }
}
