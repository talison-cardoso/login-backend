import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/User/CreateUserUseCase";
import { MongooseUserRepository } from "../../repository/implementations/mongooseUsersRepository";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const mongooseUsersRepository = new MongooseUserRepository();
    const createUserUseCase = new CreateUserUseCase(mongooseUsersRepository);

    await createUserUseCase.execute({
      name,
      email,
      password,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Unexpected error.",
    });
  }
  res.status(201).send();
};
