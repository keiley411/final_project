import { Router } from "express";
import CategoryController from "../controllers/category_controller.js";

const category_router = Router();

// getting all categories
category_router.get("/categories", CategoryController.categories);

// getting category by id
category_router.get("/category/:categoryid", CategoryController.categoryId);

//  delete() a category by id
category_router.delete(
  "/category/:categoryid",
  CategoryController.deleteCategory
);
category_router.post("/category/newCategory", CategoryController.newCategory);
// update category by id, then append to body
category_router.put("/category/:categoryid", CategoryController.updateCategory);

export default category_router;
