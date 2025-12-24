import { createFileRoute } from "@tanstack/react-router";
import { makeTitle } from "@/utils/seo";
import { SITE_CONFIG } from "@/config";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: makeTitle("about") }],
  }),
});

function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="terminal-prompt font-mono text-sm text-accent">
          cat about.md
        </div>
        <div className="space-y-4 font-sans text-base leading-relaxed text-foreground">
          <p>
            I am a software engineer with a passion for clean code and
            minimalist design. I spend my days building web applications and my
            nights exploring new technologies.
          </p>
          <p>
            When I'm not coding, you can find me reading sci-fi novels or
            tinkering with mechanical keyboards.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-mono text-sm text-foreground-muted">
          # skills.txt
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-accent">languages</h3>
            <ul className="font-mono text-sm text-foreground-muted">
              {SITE_CONFIG.skills.languages.map((skill) => (
                <li key={skill}>- {skill}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-accent">frameworks & tools</h3>
            <ul className="font-mono text-sm text-foreground-muted">
              {SITE_CONFIG.skills.frameworks.map((skill) => (
                <li key={skill}>- {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
