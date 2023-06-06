import { Request, Response } from "express";

export default class UserController {

  public async create(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;

      console.log(username, email, password);
      res.status(201).json({ username, email, password });

    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }

  public async get(req: Request, res: Response) {
    res.status(200).json({ message: "ok" });
  }

  public async update(req: Request, res: Response) {
    res.status(200).json({ message: "User returned." });
  }

  public async delete(req: Request, res: Response) {
    res.status(200).json({ message: "User returned." });
  }

}
