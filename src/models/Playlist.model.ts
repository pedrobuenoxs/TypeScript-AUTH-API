import mongoose, { Schema } from "mongoose";
import IPlaylist from "../interfaces/playlist.interface";

const PlaylistRecordSchema: Schema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    genre: { type: String },
    musics: { type: Array },
    user_id: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPlaylist>(
  "playlistRecordModel",
  PlaylistRecordSchema
);
