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
            Hello, I'm a developer who loves building tools that blend aesthetics
            with functionality. This site is an experiment in bringing the
            tactile feel of terminal interfaces to the web.
          </p>
          <p>
            I specialize in full-stack development, with a focus on React,
            TypeScript, and performant user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}
