import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { BASE_PATH } from "./config";

export const router = createRouter({ 
  routeTree,
  basepath: BASE_PATH,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
