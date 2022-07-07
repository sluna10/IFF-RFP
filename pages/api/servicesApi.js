// pages/api/products.js
import prisma1 from "../../lib/prisma1";

export default async function handle(req, res) {
  const Jobs3 = await prisma1.Jobs3.findMany();
  res.json(Jobs3);
}