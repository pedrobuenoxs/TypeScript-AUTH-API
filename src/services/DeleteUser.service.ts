import { UserRepository } from "../repository/user.repository";

export class DeleteUserService {
  constructor(private repository: UserRepository) {}

  async handle(id: number) {
    try {
      if (!id) throw new Error("Selecione uma playlist");

      const deleteUser = await this.repository.deleteOneUser(id);

      if (deleteUser.deletedCount === 0)
        throw new Error("Usuário já foi deletado");
      return { message: true };
    } catch (error) {
      return { error: error.message };
    }
  }
}
