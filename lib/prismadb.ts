//@ts-nocheck
import { PrismaClient } from "@prisma/client";

// Extend the global object to include Prisma Client
declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Add logging options to help debug
});

// Avoid recreating the Prisma client in development mode
if (process.env.NODE_ENV !== "production") global.prisma = prismadb;

export default prismadb;
