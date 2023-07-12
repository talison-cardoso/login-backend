import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { AuthenticateUseCase } from "../../useCases/User/AuthenticateUseCase";
import { MongooseUserRepository } from "../../repository/implementations/mongooseUsersRepository";

export const authenticateUserController = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;

  try {
    const mongooseUsersRepository = new MongooseUserRepository();
    const authenticateUserUseCase = new AuthenticateUseCase(
      mongooseUsersRepository
    );

    const user = await authenticateUserUseCase.execute({ email, password });

    const token = jwt.sign({ user: JSON.stringify(user) }, process.env.SECRET);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};
