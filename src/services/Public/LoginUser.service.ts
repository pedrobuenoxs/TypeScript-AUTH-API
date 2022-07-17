import { UserRepository } from "../../repository/user.repository";
import Token from "../../middleware/auth";
import bcrypt from "bcrypt";

export class LoginUserService {
  constructor(private repository: UserRepository) {}
  async handle(name: string, password: string, email: string) {
    try {
      if (!name) throw new Error("O nome é obrigatório");
      if (!password) throw new Error("A senha é obrigatória");
      if (!email) throw new Error("O email é obrigatória");
      const user = await this.repository.findByEmail(email);
      if (!user) throw new Error("Usuário nao encontrado");

      const hashPassword = user.password;
      const isPasswordMatching = await bcrypt.compare(password, hashPassword);
      if (!isPasswordMatching) throw new Error("A senha está errada");

      const tokenUser = new Token();
      const token = await tokenUser.sing(user.id, "secret");

      return {
        token: token,
        id: user.id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
