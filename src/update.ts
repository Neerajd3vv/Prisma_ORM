import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface updateType {
  lastName: string;
  password: string;
}
async function updateUser(email: string, { lastName, password }: updateType) {
  await prisma.user.update({
    where: { email },
    data: {
      lastName,
      password,
    },
  });
  console.log("Update done!");
}

updateUser("testUser2@google.com",{  lastName: "testKaRaja" , password: "testingNew"});
