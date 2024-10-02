import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
export const appRouter = createTRPCRouter({
  submitContactForm: baseProcedure
    .input(z.object({ name: z.string(), email: z.string(), message: z.string() }))
    .mutation(async ({ input }) => {
      const { name, email, message } = input;
      // Here you would typically interact with your database
      // and save the contact form data.
      // For demonstration, we'll just log the data.

      const contactAdded = await db.insert(contacts).values({
        name,
        email,
        message,
      });
      console.log('Received contact form data:', contactAdded);
      return { success: true };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
