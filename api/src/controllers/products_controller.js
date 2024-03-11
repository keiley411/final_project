import prisma from "../prisma.js";


const allProducts = async (req, res) => {
    const products = await prisma.product.findMany();
    res.send(products);
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
      const products = await prisma.product.findMany({
        where: {
          id: req.params.product_id,
        },
      });
      if (products) {
        res.send({ status: "success", products });
      } else {
        res.status(404).send({ status: "fail", message: "product not found" });
      }
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }

  const updateProduct = async (req, res) => {
    const updatedProduct = req.body;
    try {
      const product = await prisma.product.update({
        where: {
          id: req.params.productid,
        },
        data: updatedProduct,
      });
      res.send({ status: "success", product });
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }

  const deleteProduct =  async (req, res) => {
    try {
      const product = await prisma.product.delete({
        where: {
          id: req.params.productid,
        },
      });
      res.send({ status: "success", product });
    } catch (error) {
      res.status(500).send({ status: "fail", message: "internal server error" });
    }
  }
const ProductController ={allProducts, newProduct,productCategory,productId,updateProduct,deleteProduct}

export default ProductController