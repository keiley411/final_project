import  { Router } from "express";

import AuthController from "../controllers/auth_controller.js";
import protectedRoute from "../Middlewares/protected_route.js";

const auth_router = Router();

auth_router.post("/login", AuthController.userLogin);

auth_router.post("/register", AuthController.userRegister);

auth_router.get("/logout", AuthController.userLogout);

auth_router.get("/verifyToken",protectedRoute, AuthController.verifyToken);

export default auth_router;
