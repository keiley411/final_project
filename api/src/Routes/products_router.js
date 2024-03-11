import { Router } from "express";
import adminRoute from "../Middlewares/admin.js";
import ProductController from "../controllers/products_controller.js";
const product_router = Router();


product_router.get("/products", ProductController.allProducts);
product_router.post("/products", adminRoute,ProductController.newProduct);


product_router.get("/products/:category", ProductController.productCategory);
product_router.get("/products/:id",ProductController.productId);

product_router.put("/products/:productid", adminRoute, ProductController.updateProduct);

product_router.delete("/products/:productid", adminRoute,ProductController.deleteProduct);
export default product_router;
