import { createFileRoute } from "@tanstack/react-router";
import { makeTitle } from "@/utils/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [{ title: makeTitle("home") }],
  }),
});

function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="terminal-prompt font-mono text-sm text-accent">
          whoami
        </div>
        <div className="space-y-4 font-sans text-base leading-relaxed text-foreground">
          <p>
            Head of Engineering at{" "}
            <a
              href="https://sensity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-accent hover:underline"
            >
              Sensity
            </a>
            , where we're building the foundational security layer against deepfakes and synthetic media.
          </p>
          <p>
            I specialize in end-to-end ML/AI systems; the kind where you actually
            have to ship something, not just beat a benchmark. These days I spend
            more time on technical strategy and team building than writing code,
            but I still sneak in commits when no one's looking.
          </p>
        </div>
      </div>
    </div>
  );
}
