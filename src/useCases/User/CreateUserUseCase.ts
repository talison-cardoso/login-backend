import { hash } from "bcryptjs";

import { ICreateUserRequestDTO } from "../../dto/ICreateUserRequestDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repository/IUserRepository";

export class CreateUserUseCase {
  private userRepository: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepository = userRepository;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    data.password = await hash(data.password, 10);

    const user = new User(data);

    await this.userRepository.save(user);
  }
}
