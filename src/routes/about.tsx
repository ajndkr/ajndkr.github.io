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
            I've been at{" "}
            <a
              href="https://sensity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-accent hover:underline"
            >
              Sensity
            </a>{" "}
            for a few years now, working on various deepfake detection products. 
            My path here has taken me from training models to deploying them in production and 
            everything in between. I'm not just the ML person; I've gotten my hands dirty with 
            backend systems and DevOps work too.
          </p>
          <p>
            Alongside the core product work, I spent nearly three years on our
            consulting wing; generative AI and LLM projects that let us stay sharp
            on cutting-edge research while actually getting paid for it. Best of
            both worlds.
          </p>
          <p>
            Now I lead our engineering team. Less time writing code, more time
            thinking about technical strategy, and discovering that my
            calendar has strong opinions about when I eat lunch.
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
