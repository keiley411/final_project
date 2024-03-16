import prisma from "../prisma.js";

const getUserById = async (req, res) => {
  try {
    const users = await prisma.user.findFirst({
      where: {
        id: req.params.user_id,
      },
    });
    if (users) {
      res.send({ status: "success", users });
    } else {
      res.status(404).send({ status: "fail", message: "no such user" });
    }
  } catch (error) {
    res.status(500).send({ status: "fail", message: "internal server error" });
  }
};
const newUser = async (req, res) => {
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
     newUser.hashedPassword = await generateHashedPassword(newUser.password)

// then udelete password yenye haijahashiwa
delete
    delete newUser.password;
    const user = await prisma.user.create({
      data: newUser,
    });
    res.send({ status: "success", user });
  } catch (error) {
    res.send({ status: "fail", message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("auth_token");
    req.session.user = null;
  } catch (error) {
    res.send({ status: "fail", message: "internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const users = await prisma.user.delete({
      where: {
        id: req.params.user_id,
      },
    });
    res.send({ status: "success", users });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "fail", message: "internal server error" });
  }
};
const UserController = { getUserById, newUser, logoutUser, deleteUser };

export default UserController;
