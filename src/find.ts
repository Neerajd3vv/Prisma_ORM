import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function findUser(email: string) {
  const user = await prisma.user.findFirst({
    where: { email },
  });
  console.log(user);
}

findUser("himnhi@google.com");
