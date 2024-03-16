import prisma from "../prisma.js";

const categories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const categoryId = async (req, res) => {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: req.params.categoryid,
        },
      });
  
      if (category) {
        res.send({ status: "success", category });
      } else {
        res.status(404).send({ status: "fail", message: "no such category" });
      }
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }


  const deleteCategory =async (req, res) => {
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
  }

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
  }

const CategoryController = { categories,categoryId,deleteCategory,updateCategory };

export default CategoryController;
