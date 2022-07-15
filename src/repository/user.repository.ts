import IUser from "../interfaces/user.interface";
import UserModel from "../models/User.model";
import mongoose from "mongoose";
import UserDTO from "../DTO/User.DTO";

export class UserRepository {
  async saveRecord(data: IUser) {
    const record = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }
  async findByLoginPasswd(data: UserDTO) {
    return UserModel.find({ name: data.name, password: data.password });
  }
}
