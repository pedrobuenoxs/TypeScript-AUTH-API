import { Request, Response } from "express";
import { LoginUserService } from "../services/LoginUser.service";

export class LoginController {
  constructor(private userService: LoginUserService) {}

  async handle(req: Request, res: Response) {
    const { name, password, email } = req.body;
    try {
      const user = await this.userService.handle(name, password, email);
      res.json( user ).status(200);
    } catch (error) {
      return res.json({ error: error.message }).status(400);
    }
  }
}
