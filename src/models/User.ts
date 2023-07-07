import { model, Schema } from "mongoose";
import { User as IUser } from "../entities/User";

const UserSchema = new Schema<IUser>({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User = model<IUser>("User", UserSchema);
