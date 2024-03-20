import prisma from "../prisma.js";

const categories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.send({status:"success",categories});
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};
const newCategory = async (req, res) => {
  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        title: req.body.title,
      },
    });
    if (existingCategory) {
      return res
        .status(400)
        .send({ status: "fail", message: "category already exists" });
    }
    const category = await prisma.category.create({
      data: {
        title: req.body.title,
        image_url: req.body.image_url,
      },
    });
    res.send({ status: "success", category });
  } catch (error) {
    console.error(error)
    res.status(500).send({status:"fail", message: "internal server error" });
  }
};
const categoryId = async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: req.params.categoryid,
      },
      include: {
        products: true
      }
    });

    if (category) {
      res.send({ status: "success", category });
    } else {
      res.status(404).send({ status: "fail", message: "no such category" });
    }
  } catch (error) {
    res.status(500).send({ status: "fail", message: "internal server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await prisma.category.delete({
      where: {
        id: req.params.categoryid,
      },
    });
    res.send({ status: "success", category });
  } catch (error) {
    res.status(500).send({ status: "fail", message: "internal server error" });
  }
};

const updateCategory = async (req, res) => {
  const updatedCategory = req.body;
  try {
    const category = await prisma.category.update({
      where: {
        id: req.params.categoryid,
      },
      data: updatedCategory,
    });
    res.send({ status: "success", category });
  } catch (error) {
    res.status(500).send({ status: "fail", message: "internal server error" });
  }
};

const CategoryController = {
  categories,
  categoryId,
  deleteCategory,
  updateCategory,
  newCategory,
};

export default CategoryController;
