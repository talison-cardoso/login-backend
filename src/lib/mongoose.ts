import mongoose from "mongoose";

let database: mongoose.Connection;

export const connect = () => {
  const uri = process.env.MONGO_URI;

  mongoose.connect(uri);

  database = mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
