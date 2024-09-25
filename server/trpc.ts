/**
 * tRPC Server Configuration
 * 
 * This file sets up the tRPC server, defining the context and procedures.
 */

import { initTRPC } from '@trpc/server';
import { z } from 'zod';

// Initialize tRPC
const t = initTRPC.create();

// Define procedures
export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;