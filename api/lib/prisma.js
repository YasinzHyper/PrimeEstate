import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from '@prisma/extension-accelerate'

// let prisma;

// if (process.env.NODE_ENV === "production") {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient().$extends(withAccelerate());
//     }
//     prisma = global.prisma;
// } else {
//     prisma = new PrismaClient().$extends(withAccelerate());
// }
const prisma = new PrismaClient();

export default prisma;
