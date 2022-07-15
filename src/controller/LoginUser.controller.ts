import { Request, Response } from "express";
import { LoginUserService } from "../services/LoginUser.service";

export class LoginController {
  constructor(private userService: LoginUserService) {}

  async handle(req: Request, res: Response) {
    const { name, password } = req.body;
    try {
      const token = await this.userService.handle(name, password);
      res.json({ token: token }).status(200);
    } catch (error) {
      return res.json({ error: error.message }).status(400);
    }
  }
}
