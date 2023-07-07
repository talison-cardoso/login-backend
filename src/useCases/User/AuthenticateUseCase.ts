import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

import { IAuthenticateUserRequestDTO } from "../../dto/IAuthenticateUserRequestDTO";
import { IUsersRepository } from "../../repository/IUserRepository";

export class AuthenticateUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid Credentials.");
    }

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) {
      throw new Error("Invalid Credentials");
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET);

    return { token };
  }
}
