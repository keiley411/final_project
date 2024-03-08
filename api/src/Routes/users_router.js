import { Router } from "express";
import prisma from "../prisma.js";

const users_router = Router();

users_router.post("/user", async (req, res) => {
  try {
    const newUser = req.body;
    const checkUsername = await prisma.user.findUnique({
      where: {
        user_name: newUser.user_name,
      },
    });

    if (checkUsername) {
      return res.send({ status: "fail", message: "username already exists" });
    }
    const checkUserEmail = await prisma.user.findUnique({
      where: {
        email: newUser.email,
      },
    });
    if (checkUserEmail) {
      return res.send({ status: "fail", message: "email already exists" });
    }
    const user = await prisma.user.create({
      data: newUser,
    });
    res.send({ status: "success", user });
  } catch (error) {
    res.send({ status: "fail", message: error.message });
  }
});
export default users_router;
