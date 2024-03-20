import prisma from "../prisma.js";
import { validationResult,matchedData} from "express-validator";


const checkProducts = async (req, res) => {
  try {
    console.log('req.body: ', req.body)
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      return res.send(errors).end()
    }
    const product = matchedData(req)
    await newProduct(product)

    res.end()
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error')
  }
}
const allProducts = async (req, res) => {
    const products = await prisma.product.findMany();
    res.send({status: 'success', products});
  }

  const newProduct =async (req, res) => {
    console.log(req.body);
    const newProduct = req.body;
    const product = await prisma.product.create({
      data: { ...newProduct },
    });
    res.send(product);
  }

  const productCategory = async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        where: {
          category_id: req.params.category_id,
        },
      });
      console.log(products)
      if (products) {
        res.send({ status: "success", products });
      } else {
        res.status(404).send({ status: "fail", message: "no such product" });
      }
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }

  const productId = async (req, res) => {
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (product) {
        res.send({ status: "success", product });
      } else {
        res.status(404).send({ status: "fail", message: "product not found" });
      }
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }

  const updateProduct = async (req, res) => {
    const updatedProduct = req.body;
    console.log(req.params, updatedProduct)
    try {
      const product = await prisma.product.update({
        where: {
          id: req.params.productid,
        },
        data: updatedProduct,
      });
      res.send({ status: "success", product });
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }

  const deleteProduct =  async (req, res) => {
    console.log('Product Id ', req.params)
    try {
      const product = await prisma.product.delete({
        where: {
          id: req.params.productid,
        },
      });
      res.send({ status: "success", product });
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }
const ProductController ={allProducts, newProduct,productCategory,productId,updateProduct,deleteProduct}

export default ProductController