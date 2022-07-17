import { UserRepository } from "../../repository/user.repository";
import IUser from "../../interfaces/user.interface";
import bcrypt from "bcrypt";
import Token from "../../middleware/auth";
export class CreateUserUserService {
  constructor(private repository: UserRepository) {}

  async handle(
    authHeader: string,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    const auth = new Token();
    const userID = await auth.getTokenUserId(authHeader);

    try {
      const currentUser = await this.repository.findByID(userID);
      if (currentUser[0].role != "ADMIN")
        throw new Error("Para criar um usuário, faça login como admnistrador.");
      if (!name) throw new Error("O nome é obrigatório");
      if (!password) throw new Error("A senha é obrigatória");
      if (!email) throw new Error("O email é obrigatório");
      const user = await this.repository.findByEmail(email);
      if (user) throw new Error("O usuário já esta cadastrado");

      const hashedPassword = await bcrypt.hash(password, 10);
      const id = new Date().valueOf();

      const newUser: IUser = {
        id,
        name,
        email,
        password: hashedPassword,
        role: role || "USER",
      };
      return await this.repository.saveRecord(newUser);
    } catch (error) {
      return { error: error.message };
    }
  }
}
