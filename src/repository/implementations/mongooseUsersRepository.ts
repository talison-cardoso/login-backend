import { IUsersRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import { User as UserModel } from "../../models/User";

export class MongooseUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({ email });
    return user;
  }

  async save(user: User): Promise<void> {
    await UserModel.create(user);
  }
}
