import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addTodos(userId: number, title: string, description: string) {
  await prisma.todo.create({
    data: {
      userId,
      title,
      description,
    },
  });
  console.log("Todo created successfully!");
  
}

addTodos(1, "Gym", "legs day");
