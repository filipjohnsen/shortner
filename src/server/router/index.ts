// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { shortLinkRouter } from './short-link';

export const appRouter = createRouter().transformer(superjson).merge('shortLink.', shortLinkRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
