const adminRoute = async (req, res, next) => {
  const user = req.session.user;
  if (!user) {
    return res
      .status(401)
      .send({ status: "fail", message: "unauthorised user" });
  }
  if (user.role !== "admin") {
    return res
      .status(403)
      .send({ status: "fail", message: " access forbidden" });
  }
  next()
};

export default adminRoute
