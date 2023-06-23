import { IUsersRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import { User as mongo } from "../../models/User";

export class MongooseUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await mongo.findOne({ email });

    if (user) {
      const { name, password } = user;
      return { name, email, password };
    }
    return null;
  }

  async save(user: User): Promise<void> {
    await mongo.create(user);
  }
}
