import { Router } from "express";
import { createUserController } from "../controllers/user";

const router = Router();

router.post("/auth/registers", createUserController);

export default router;
