import { Router } from "express";
import UserController from "../controllers/users_controller.js";

const users_router = Router();

users_router.post("/user",UserController.newUser);
users_router.get("/user/:id", UserController.getUserById);
users_router.get("/user/logout",UserController.logoutUser);
users_router.delete("/user/:user_id",UserController.deleteUser);
export default users_router;
