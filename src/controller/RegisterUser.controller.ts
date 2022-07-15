import { UserRepository } from "../repository/user.repository";
import { Request, Response } from "express";
import IUser from "../interfaces/user.interface";
import Token from "../middleware/auth";
import UserDTO from "../DTO/User.DTO";

export class RegisterUserController {
  constructor(private repository: UserRepository) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password || !req || !req.body) throw Error();

    const id = new Date().valueOf();

    const user: IUser = { id, name, email, password, role: "USER" };

    const token = await new Token().sing(`${id}`, email);
    await this.repository.saveRecord(user);

    const newUser: UserDTO = {
      id: id,
      name: name,
      email: email,
      role: user.role,
      token,
    };

    return res.json(newUser);
  }
}
