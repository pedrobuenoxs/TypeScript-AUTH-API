import IUser from "../interfaces/user.interface";
import UserModel from "../models/User.model";
import mongoose from "mongoose";

export class UserRepository {
  async saveRecord(data: IUser) {
    const record = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }
  async findByLoginPasswd(name: string, password: string) {
    return UserModel.find({ name: name, password: password });
  }
}
