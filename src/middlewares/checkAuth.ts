import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401).send("Access denied. No token provided");
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET) as JwtPayload;

    if (payload) {
      req.user = payload.user;
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};
