import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validator.middlerware.js";
import { userRegisterValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(login);

export default router;
