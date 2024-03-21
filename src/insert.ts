import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const createdUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
    select: {
      firstName: true,
      email: true,
    },
  });
  console.log("User created successfully!");
  console.log(createdUser);
  
}

insertUser("testUser2@google.com", "testing2", "random2", "testpassword2");
