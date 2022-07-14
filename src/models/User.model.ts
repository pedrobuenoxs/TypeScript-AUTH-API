import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user.interface";

const RecordSchema: Schema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: Number },
    password: { type: String },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("recordModel", RecordSchema);
