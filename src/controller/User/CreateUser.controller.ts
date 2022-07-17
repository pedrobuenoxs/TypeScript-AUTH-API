import { Request, Response } from "express";
import { CreateUserUserService } from "../../services/User/CreateUser.service";

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
      res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
