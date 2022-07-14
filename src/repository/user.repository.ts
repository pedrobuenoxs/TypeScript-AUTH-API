import IUser from "../interfaces/user.interface";
import UserModel from "../models/User.model";
import mongoose from "mongoose";

export class UserRepository {
  saveRecord(data: IUser) {
    const record = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }
}
