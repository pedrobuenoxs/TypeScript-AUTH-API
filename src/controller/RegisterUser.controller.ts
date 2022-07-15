import { UserRepository } from "../repository/user.repository";
import { Request, Response } from "express";
import IUser from "../interfaces/user.interface";

export class RegisterUserController {
  constructor(private repository: UserRepository) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user: IUser = { name, email, password, role: "USER" };
    const saveUser = await this.repository.saveRecord(user);
    return res.json(saveUser);
  }
}
