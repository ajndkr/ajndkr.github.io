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
    <div className="space-y-8">
      <div className="terminal-prompt font-mono text-sm text-accent">
        echo $CONTACT_INFO
      </div>

      <div className="space-y-4 font-mono text-sm">
        <div className="grid grid-cols-[100px_1fr] gap-4">
          <span className="text-foreground-muted">github:</span>
          <a
            href={SITE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @ajndkr
          </a>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-4">
          <span className="text-foreground-muted">linkedin:</span>
          <a
            href={SITE_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            in/ajinkyaindulkar
          </a>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-4">
          <span className="text-foreground-muted">location:</span>
          <span className="text-foreground">Amsterdam, The Netherlands</span>
        </div>
      </div>
    </div>
  );
}
