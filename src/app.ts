import express from "express";
import UserRouter from "./routes/users.routers";

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

export default app;
