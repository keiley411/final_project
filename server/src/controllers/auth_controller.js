import prisma from "../prisma.js";
import {
  generateHashedPassword,
  generateToken,
  comparePassword,
} from "../Middlewares/auth.js";
import { validationResult } from "express-validator";

const userRegister = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ status: "fail", message: errors.array() });
    }

    const { user_name, password, email } = req.body;

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [{ user_name: user_name }, { email: email }],
      },
    });
    if (existingUser.length > 0) {
      return res
        .status(400)
        .send({ status: "fail", message: "user exists already" });
    }

    const hashedPassword = await generateHashedPassword(password);

    console.log(
      await prisma.user.create({
        data: {
          user_name: user_name,
          hashedPassword: hashedPassword,
          email: email,
        },
      })
    );

    res
      .status(200)
      .send({ status: "success", message: "data sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "internal server error" });
  }
};

const verifyToken = async (req, res) => {
  return res
    .status(200)
    .send({ status: "success", user: req.session.user })
    .end();
};

const userLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ status: "fail", message: errors.array() });
    }
    const { user_name, password } = req.body;
    console.log(user_name, password);
    const user = await prisma.user.findUnique({
      where: {
        user_name: user_name,
      },
    });

    if (!user) {
      return res
        .status(401)
        .send({ status: "fail", message: "invalid username" });
    }
    const match = await comparePassword(password, user.hashedPassword);
    if (!match) {
      return res.status(401).send({
        status: "fail",
        message: "invalid password stop guessing password",
      });
    }

    const token = generateToken(user.id);
    req.session.user = user;
    res.cookie("auth_token", token);
    res.status(201).send({ status: "success", token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "fail", message: error.message });
  }
};

const userLogout = async (req, res) => {
  req.session.user = null;
  res.clearCookie("auth_token");
  return res.send({status: "success"}).end()
}


const AuthController = { userLogin, userLogout, userRegister, verifyToken };

export default AuthController;
