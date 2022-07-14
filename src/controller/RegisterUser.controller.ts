import { UserRepository } from "../repository/user.repository";
import { Request, Response } from "express";

export class RegisterUserController {
  constructor(private repository: UserRepository) {}

  async handle(req: Request, res: Response) {
    res.send("deu bom");
  }
}
