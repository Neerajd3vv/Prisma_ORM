import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function findTodo(id: number) {
  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });
  console.log(todo);
}

findTodo(1)