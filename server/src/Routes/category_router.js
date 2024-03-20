import { Router } from "express";
import CategoryController from "../controllers/category_controller.js";
import protectedRoute from "../Middlewares/protected_route.js";
import adminRoute from "../Middlewares/admin.js";

const category_router = Router();

// getting all categories
category_router.get("/categories", CategoryController.categories);

// getting category by id
category_router.get("/category/:categoryid", CategoryController.categoryId);

//  delete() a category by id
category_router.delete(
  "/category/:categoryid",
  protectedRoute,
  adminRoute,
  CategoryController.deleteCategory
);
category_router.post(
  "/category/newCategory",
  protectedRoute,
  adminRoute,
  CategoryController.newCategory
);
// update category by id, then append to body
category_router.put(
  "/category/:categoryid",
  protectedRoute,
  adminRoute,
  CategoryController.updateCategory
);

export default category_router;
