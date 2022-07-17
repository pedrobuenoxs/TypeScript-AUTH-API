import IPlaylist from "../interfaces/playlist.interface";
import playlistRecordModel from "../models/Playlist.model";
import mongoose from "mongoose";

export class PlaylistRepository {
  async createPlaylist(data: IPlaylist) {
    const record = new playlistRecordModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    return record.save();
  }
  async loadOnePlaylist(name: string, user_id: number) {
    return playlistRecordModel.findOne({ name: name, user_id: user_id });
  }
  async getAllPlaylist() {
    return true;
  }

  async deleteOnePlaylist() {
    return true;
  }

  async editOnePlaylist() {
    return true;
  }
}
