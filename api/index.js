import prisma from "./prisma/prisma.js";

const products = await prisma.products.findMany()
const users = await prisma.user.findMany()
console.log('Users: ', users)
console.log('Products: ',products)