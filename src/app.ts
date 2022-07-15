import express from "express";
import { PlaylistRouter, UserRouter, UsersRouter } from "./routes/index";
const app = express();

import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://pedrobuenoxs:12345@dev-challenge.wwuxf6z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Error while connecting database::", err);
  });

app.use(express.json());
app.use("/user", UserRouter);
app.use("/users", UsersRouter);
app.use("/playlist", PlaylistRouter);
export default app;
