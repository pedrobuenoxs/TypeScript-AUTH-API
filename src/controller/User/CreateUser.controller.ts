import { Request, Response } from "express";
import { CreateUserUserService } from "../../services/CreateUser.service";

export class CreateUserController {
  constructor(private userService: CreateUserUserService) {}

  async handle(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const authHeader = req.headers.authorization || "";
    try {
      const user = await this.userService.handle(
        authHeader,
        name,
        email,
        password,
        role
      );
      res.json(user).status(201);
    } catch (error) {
      return res.json({ error: error.message }).status(400);
    }
  }
}
