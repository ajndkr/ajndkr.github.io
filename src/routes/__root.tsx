import { createRootRoute, Outlet, useMatches, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { NoiseOverlay } from "@/components/noise-overlay";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

import { NotFound } from "@/components/not-found";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const matches = useMatches();
  const router = useRouter();

  useEffect(() => {
    const match = matches
      .slice()
      .reverse()
      .find((m) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const route = router.routesById[m.routeId] as any;
        return route?.options?.head;
      });

    if (match) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const route = router.routesById[match.routeId] as any;
      const head = route.options.head(match);
      const titleMeta = head.meta?.find((m: any) => m.title);
      if (titleMeta?.title) {
        document.title = titleMeta.title;
      }
    }
  }, [matches, router]);

  return (
    <ThemeProvider>
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background text-foreground">
        <NoiseOverlay />
        
        {/* Row 1: Header */}
        <Header />

        {/* Row 2: Main Content Area */}
        <div className="flex flex-1 flex-col overflow-hidden sm:flex-row">
          {/* Sidebar */}
          <Sidebar />

          {/* Content Panel */}
          <main className="flex-1 overflow-y-auto scroll-smooth">
            <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-8">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Row 3: Footer */}
        <Footer />
        
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}
