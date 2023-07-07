import { Request, Response } from "express";
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

    const token = await authenticateUserUseCase.execute({ email, password });

    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};
