import { Router } from "express";
import { createUserController } from "./controllers/user";
import { authenticateUserController } from "./controllers/user/autheticateUserController";

const router = Router();

router.post("/auth/registers", createUserController);
router.post("/auth/login", authenticateUserController);

export default router;
