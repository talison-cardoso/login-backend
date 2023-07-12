import { compare } from "bcryptjs";

import { IAuthenticateUserRequestDTO } from "../../dto/IAuthenticateUserRequestDTO";
import { IUsersRepository } from "../../repository/IUserRepository";

export class AuthenticateUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new Error("Incorrect password");
    }

    return { id: user.id, name: user.name };
  }
}
