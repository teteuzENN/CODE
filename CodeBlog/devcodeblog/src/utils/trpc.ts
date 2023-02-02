import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "C:/Users/teteu/Documents/CODE/CodeBlog/server/src/routes/trpcroute";
export const trpc = createTRPCReact<AppRouter>();
