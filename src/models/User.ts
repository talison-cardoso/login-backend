import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});

export const User = model("User", UserSchema);
