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
  async getAllPlaylist(user_id: number) {
    return await playlistRecordModel.find({ user_id: user_id });
  }

  async deleteOnePlaylist(id: number, user_id: number) {
    return await playlistRecordModel.deleteOne({ id: id, user_id: user_id });
  }

  async editOnePlaylist(id: number, user_id: number, data: IPlaylist) {
    const { name, genre, musics } = data;
    return await playlistRecordModel.findOneAndUpdate(
      {
        id: id,
        user_id: user_id,
      },
      {
        name,
        genre,
        musics,
      },
      { new: true }
    );
  }
}
