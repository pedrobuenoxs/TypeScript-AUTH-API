import { UserRepository } from "../repository/user.repository";
import IUser from "../interfaces/user.interface";
export class RegisterUserService {
  constructor(private repository: UserRepository) {}

  async handle(name: string, email: string, password: string) {
    if (!name) throw new Error("O nome é obrigatório");
    if (!email) throw new Error("O email é obrigatório");
    if (!password) throw new Error("A senha é obrigatória");

    const repository = new UserRepository();
    const user = await repository.findByLoginPasswd(name, password);
    if (user.length > 0) throw new Error("O usuário já esta cadastrado");

    const id = new Date().valueOf();

    const newUser: IUser = { id, name, email, password, role: "USER" };
    return await this.repository.saveRecord(newUser);
  }
}
