import { UserRepository } from "../../repository/user.repository";
import IUser from "../../interfaces/user.interface";
import bcrypt from "bcrypt";
export class RegisterUserService {
  constructor(private repository: UserRepository) {}

  async handle(name: string, email: string, password: string) {
    try {
      if (!name) throw new Error("O nome é obrigatório");
      if (!email) throw new Error("O email é obrigatório");
      if (!password) throw new Error("A senha é obrigatória");
      const user = await this.repository.findByEmail(email);
      if (user) throw new Error("O usuário já esta cadastrado");

      const hashedPassword = await bcrypt.hash(password, 10);
      const id = new Date().valueOf();

      const newUser: IUser = {
        id,
        name,
        email,
        password: hashedPassword,
        role: "USER",
      };
      return await this.repository.saveRecord(newUser);
    } catch (error) {
      return { error: error.message };
    }
  }
}
