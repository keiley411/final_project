import  { Router } from "express";

import AuthController from "../controllers/auth_controller.js";

const auth_router = Router();

auth_router.post("/register", AuthController.userLogin);

auth_router.post("/login", AuthController.userRegister);

export default auth_router;
