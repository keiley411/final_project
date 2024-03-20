import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import product_router from "./Routes/products_router.js";
import users_router from "./Routes/users_router.js";
import category_router from "./Routes/category_router.js";
import auth_router from "./Routes/auth_router.js";
import uploads_router from "./Routes/uploads_router.js";
import { ExpressValidator } from "express-validator";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(cors({
  origin:" http://localhost:5173",
  methods:["GET", "POST"],
  credentials:true
}));
app.use(cookieParser());
app.use(session({ secret: "valid",
resave: false,
saveUninitialized:false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"))
app.use(product_router);
app.use(users_router);
app.use(category_router);
app.use(auth_router);
app.use(uploads_router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
