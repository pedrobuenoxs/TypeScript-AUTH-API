import IPlaylist from "../interfaces/playlist.interface";
import PlaylistModel from "../models/Playlist.model";
import mongoose from "mongoose";

export class UserRepository {
  async createPlaylist(data: IPlaylist) {
    const record = new PlaylistModel({
      _id: new mongoose.Types.ObjectId(),
      ...data,
    });
    return record.save();
  }
  async loadOnePlaylist() {
    return true;
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
