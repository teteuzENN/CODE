import { t } from "../../trpc";
import { string, z } from "zod";
import prisma from "../../prisma";

export const appRouter = t.router({
  getLasts: t.procedure.query(async () => {
    const posts = await prisma.posts.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  }),

  getUnique: t.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const posts = await prisma.posts.findFirst({
        where: {
          id: input.id,
        },
      });
      return posts;
    }),
  getAll: t.procedure.query(async () => {
    const posts = await prisma.posts.findMany({});
    return posts;
  }),
});

export type AppRouter = typeof appRouter;
