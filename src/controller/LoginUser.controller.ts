import { UserRepository } from "../repository/user.repository";
import { Request, Response } from "express";
import Token from "../middleware/auth";

export class LoginController {
  constructor(private repository: UserRepository) {}

  async handle(req: Request, res: Response) {
    const { name, password } = req.body;
    try {
      if (!name) throw new Error("O nome é obrigatório");
      if (!password) throw new Error("A senha é obrigatória");
    } catch (error) {
      return res.json({ error: error });
    }

    const user = await this.repository.findByLoginPasswd(name, password);
    const tokenUser = new Token();
    const token = await tokenUser.sing(user[0].id, user[0].email);

    res.json({ token: token });
  }
}
