import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL, // Corrected to use datasourceURL
    }).$extends(withAccelerate());
    const result = await prisma.log.create({
      data: {
        level: 'info',
        message: 'kuch bhi',
        meta: {
          headers: JSON.stringify(request.headers),
        },
      },
    });
    console.log(JSON.stringify(result));
    return  Response.json(result); // Corrected Response creation
  },
};
