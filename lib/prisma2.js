import { PrismaClient } from "@prisma/client";


let prisma2;

if (process.env.NODE_ENV === "production") {
  prisma2 = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma2 = global.prisma;
}
// console.log(prisma1);
export default prisma2;     