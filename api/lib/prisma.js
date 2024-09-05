import { PrismaClient } from "@prisma/client";

if (process.env.NODE_ENV === "production") {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
} else {
    prisma = new PrismaClient();
}

export default prisma;
