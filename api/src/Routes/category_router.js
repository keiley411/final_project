import { Router } from "express";
import prisma from "../prisma.js";

const category_router = Router();

// getting all categories
category_router.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
});

// getting category by id
category_router.get("/category/:categoryid", async (req, res) => {
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
});

//  delete() a category by id 
category_router.delete("/category/:categoryid", async (req, res) => {
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
});

// update category by id, then append to body
category_router.put("/category/:categoryid", async (req, res) => {
    const updatedCategory = req.body
    try {
      const category = await prisma.category.update({
        where :{
            id:req.params.categoryid
        },
        data: updatedCategory
      })
      res.send({ status: "success", category });
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  });

//   category_router.patch("/category/:categoryid", async (req, res) => {
//     const editedCategory = req.body
//     try {
//       const category = await prisma.category.edit({
//         where :{
//             id:req.params.categoryid
//         },
//         data: editedCategory
//       })
//       res.send({ status: "success", category });
//     } catch (error) {
//       res.status(500).send({ status: "fail", message: "internal server error" });
//     }
//   });
export default category_router;
