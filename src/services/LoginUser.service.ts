import { UserRepository } from "../repository/user.repository";
import Token from "../middleware/auth";
import bcrypt from "bcrypt";

export class LoginUserService {
  constructor(private repository: UserRepository) {}
  async handle(name: string, password: string, email: string) {
    if (!name) throw new Error("O nome é obrigatório");
    if (!password) throw new Error("A senha é obrigatória");
    const user = await this.repository.findByEmail(email);
    console.log(user);
    if (user) {
      // const isPasswordMatching = await bcrypt.compare(password, user.password);
      // if (!isPasswordMatching) throw new Error("A senha está errada");
      const tokenUser = new Token();
      const token = await tokenUser.sing(user.id, user.email);
      return { token, ...user };
    } else {
      return { error: "Login inválido" };
    }
  }
}
