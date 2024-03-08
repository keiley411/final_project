import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import product_router from "./Routes/products_router.js";
import users_router from "./Routes/users_router.js";
import category_router from "./Routes/category_router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// PORT = 3000;

app.use(cookieParser());
app.use(session({ secret: "valid" }));
app.use(express.json());
app.use(product_router);
app.use(users_router);
app.use(category_router);

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});