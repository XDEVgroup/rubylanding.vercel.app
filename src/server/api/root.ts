import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { blogRouter } from "./routers/blogs";
import { mailRouter } from "./routers/mail";
import { AIRouter } from "./routers/AIRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  mail: mailRouter,
  blog: blogRouter,
  AI: AIRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
