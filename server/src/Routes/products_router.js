import { Router } from "express";
import adminRoute from "../Middlewares/admin.js";
import ProductController from "../controllers/products_controller.js";
import { checkSchema } from "express-validator";
import { ProductSchema } from "../../prisma/ProductsSchema.js";
import protectedRoute from "../Middlewares/protected_route.js";

const product_router = Router();

product_router.get("/products", ProductController.allProducts);
product_router.get("/products/categories/:category", ProductController.productCategory);
product_router.get("/products/:id", ProductController.productId);

product_router.post(
  "/products",
  protectedRoute,
  adminRoute,
  checkSchema(ProductSchema),
  ProductController.newProduct
);

product_router.put(
  "/products/:productid",
  protectedRoute,
  adminRoute,
  ProductController.updateProduct
);

product_router.delete(
  "/products/:productid",
  protectedRoute,
  adminRoute,
  ProductController.deleteProduct
);

export default product_router;
