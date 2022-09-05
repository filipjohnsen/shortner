import { createRouter } from './context';
import { z } from 'zod';

export const shortLinkRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.shortLink.findMany();
    },
  })
  .mutation('create', {
    input: z.object({
      url: z.string(),
      slug: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.shortLink.create({
        data: {
          slug: input.slug,
          url: input.url,
        },
      });
    },
  });
