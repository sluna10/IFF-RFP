// pages/api/products.js
import prisma2 from "../../lib/prisma2";

export default async function handle(req, res) {
  const Services = await prisma2.Services.findMany();
  res.json(Services);
}