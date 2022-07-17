import { UserRepository } from "../../repository/user.repository";
import IUser from "../../interfaces/user.interface";
import Token from "../../middleware/auth";
import bcrypt from "bcrypt";

export class UpdateUserService {
  constructor(private repository: UserRepository) {}

  async handle(data: IUser, authHeader: string) {
    const { id, name, email, password, role } = data;

    const auth = new Token();

    try {
      if (!id) throw new Error("Id é obrigatório");
      if (!authHeader) throw new Error("Token é obrigatório");

      const currentUserID = await auth.getTokenUserId(authHeader);
      const currentUser = await this.repository.findByID(currentUserID);

      console.log(currentUser);
      if (currentUser[0].role != "ADMIN")
        throw new Error(
          "Para editar um usuário, faça login como admnistrador."
        );

      const hashedPassword = await bcrypt.hash(password, 10);

      return await this.repository.editOneUser(
        id,
        name,
        email,
        hashedPassword,
        role
      );
    } catch (error) {
      return { error: error.message };
    }
  }
}
