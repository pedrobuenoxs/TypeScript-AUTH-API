import { UserRepository } from "../repository/user.repository";
import { Request, Response } from "express";
import IUser from "../interfaces/user.interface";
import { RegisterUserService } from "../services/RegisterUser.service";

export class RegisterUserController {
  constructor(private repository: UserRepository) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const verifyUser = new RegisterUserService();
      await verifyUser.handle(name, email, password);
    } catch (error) {
      return res.json({ error: error.message }).status(400);
    }

    const id = new Date().valueOf();

    const user: IUser = { id, name, email, password, role: "USER" };

    const newUser = await this.repository.saveRecord(user);

    return res.json(newUser).status(201);
  }
}
