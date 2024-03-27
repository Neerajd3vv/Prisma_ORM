import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function updateTodo(id: number, title: string, description: string) {
  await prisma.todo.update({
    where: { id },
    data: {
      title,
      description,
    },
  });
  console.log("Todo update completed!");
}

updateTodo(1, "Coding", "Todo app in typescript");
