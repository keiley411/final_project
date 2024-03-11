import { Router } from "express";
import CategoryController from "../controllers/category_controller.js";

const category_router = Router();

// getting all categories
category_router.get("/categories",CategoryController.categories);

// getting category by id
category_router.get("/category/:categoryid", CategoryController.categoryId);

//  delete() a category by id
category_router.delete("/category/:categoryid", CategoryController.deleteCategory);

// update category by id, then append to body
category_router.put("/category/:categoryid", CategoryController.updateCategory);

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
