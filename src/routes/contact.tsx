import { createFileRoute } from "@tanstack/react-router";
import { makeTitle } from "@/utils/seo";
import { SITE_CONFIG } from "@/config";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: makeTitle("contact") }],
  }),
});

function ContactPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="terminal-prompt font-mono text-sm text-accent">
        echo $CONTACT_INFO
      </div>

      <div className="space-y-1 font-mono text-sm">
        <a
          href={SITE_CONFIG.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-2 flex min-h-[48px] items-center gap-4 rounded-md px-2 transition-colors active:bg-highlight hover:bg-highlight sm:mx-0 sm:min-h-0 sm:py-2"
        >
          <span className="w-20 shrink-0 text-foreground-muted sm:w-24">github:</span>
          <span className="text-accent">@ajndkr</span>
        </a>
        <a
          href={SITE_CONFIG.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-2 flex min-h-[48px] items-center gap-4 rounded-md px-2 transition-colors active:bg-highlight hover:bg-highlight sm:mx-0 sm:min-h-0 sm:py-2"
        >
          <span className="w-20 shrink-0 text-foreground-muted sm:w-24">linkedin:</span>
          <span className="text-accent">in/ajinkyaindulkar</span>
        </a>
        <div className="-mx-2 flex min-h-[48px] items-center gap-4 px-2 sm:mx-0 sm:min-h-0 sm:py-2">
          <span className="w-20 shrink-0 text-foreground-muted sm:w-24">location:</span>
          <span className="text-foreground">Amsterdam, NL</span>
        </div>
      </div>
    </div>
  );
}
