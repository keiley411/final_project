import { Router } from "express";
import prisma from "../prisma.js";
const product_router = Router();

// get() all products
product_router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.send(products);
});

// posting a new product
product_router.post("/product", async (req, res) => {
  console.log(req.body);
  const newProduct = req.body;
  const product = await prisma.product.create({
    data: { ...newProduct },
  });
  res.send(product);
});

// getting product by category
product_router.get("/product/:category", async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category_id: req.params.category_id,
      },
    });
    if(products){
        res.send({status:"success", products})
    }else{
        res.status(404).send({status:"fail",message:"no such product"})
    }
  } catch (error) {
    res.status(500).send({status:"fail",message:"internal server error"})
  }
});
// getting product by id

// updating a product
// deleting a product by id
export default product_router;
