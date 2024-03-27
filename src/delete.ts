import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function delteUser(id: number) {
  await prisma.user.delete({
    where: { id },
  });
  console.log("User deleted successfully!");
}
delteUser(4);
