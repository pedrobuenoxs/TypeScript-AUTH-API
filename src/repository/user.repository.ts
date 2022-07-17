import IUser from "../interfaces/user.interface";
import userRecordModel from "../models/User.model";
import mongoose from "mongoose";

export class UserRepository {
  async saveRecord(data: IUser) {
    const record = new userRecordModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    const save = record.save();
    return save;
  }
  async findByEmail(email: string) {
    return userRecordModel.findOne({ email });
  }

  async findByID(user_id: number) {
    return userRecordModel.find({ id: user_id });
  }

  async findAll() {
    return userRecordModel.find();
  }
}
