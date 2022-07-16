import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user.interface";

const UserRecordSchema: Schema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("userRecordModel", UserRecordSchema);
