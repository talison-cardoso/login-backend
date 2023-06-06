import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

const user = new UserController();

router.post("/", user.create);
router.post("/", user.get);
router.patch("/", user.update);
router.delete("/", user.delete);


export default router;
