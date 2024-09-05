import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'

if (process.env.NODE_ENV === "production") {
    if (!global.prisma) {
        global.prisma = new PrismaClient().$extends(withAccelerate());
    }
    prisma = global.prisma;
} else {
    prisma = new PrismaClient().$extends(withAccelerate());
}

export default prisma;
