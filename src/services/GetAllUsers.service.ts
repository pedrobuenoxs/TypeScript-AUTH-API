import { UserRepository } from "../repository/user.repository";
import Token from "../middleware/auth";

export class GetAllUsersService {
  constructor(private repository: UserRepository) {}

  async handle(authHeader: string) {
    try {
      if (!authHeader) throw new Error("Token inválido");
      const auth = new Token();
      const userID = await auth.getTokenUserId(authHeader);
      const currentUser = await this.repository.findByID(userID);
      if (currentUser[0].role != "ADMIN")
        throw new Error("Para criar um usuário, faça login como admnistrador.");
      return await this.repository.findAll();
    } catch (error) {
      return { error: error.message };
    }
  }
}
