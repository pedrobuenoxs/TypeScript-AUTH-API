import { UserRepository } from "../repository/user.repository";
import Token from "../middleware/auth";

export class LoginUserService {
  constructor(private repository: UserRepository) {}
  async handle(name: string, password: string) {
    if (!name) throw new Error("O nome é obrigatório");
    if (!password) throw new Error("A senha é obrigatória");
    const user = await this.repository.findByLoginPasswd(name, password);
    if (user.length > 0) {
      const tokenUser = new Token();
      const token = await tokenUser.sing(user[0].id, user[0].email);
      return { token, ...user };
    } else {
      return { error: "Login inválido" };
    }
  }
}
