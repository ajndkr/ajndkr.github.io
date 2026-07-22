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
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-2">
        <div className="terminal-prompt font-mono text-sm text-accent">
          cat about.md
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-foreground sm:text-base">
          <p>
            I've been at{" "}
            <a
              href="https://sensity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-2 hover:text-accent hover:underline"
            >
              Sensity
            </a>{" "}
            for six-plus years now, working across the full stack of deepfake detection: computer
            vision research, model training, and shipping it all to production. I did my MSc in AI
            at Radboud University (cum laude), with a thesis on lip-sync deepfake detection done
            right here at Sensity. Started as a Machine Learning Engineer in 2021, moved up to
            Senior ML Engineer in 2023, and I've been Head of Engineering since 2024. I'm not just
            the ML person; I've gotten my hands dirty with backend systems and DevOps work too.
          </p>
          <p>
            Alongside the core product work, I spent nearly three years on generative AI and LLM
            consulting projects that let us stay sharp on cutting-edge research while actually getting
            paid for it. That work produced lanarky, an open-source framework for building LLM
            microservices that's since picked up 900+ GitHub stars. I'm also an early maintainer of
            DOT, a widely-adopted open-source deepfake toolkit with 4,500+ stars.
          </p>
          <p>
            Now I lead an engineering team of 8+ across backend, full-stack, ML, and frontend, plus
            QA: setting technical direction, owning the roadmap, and keeping a predictable release
            cadence across a handful of microservices and our on-premise product. I've also run
            technical due diligence twice, once for an internal funding round and once for a client
            acquisition. Less time writing code, more time thinking about technical strategy, and
            discovering that my calendar has strong opinions about when I eat lunch.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-mono text-sm text-foreground-muted">
          # skills.txt
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-accent">languages</h3>
            <ul className="space-y-1 font-mono text-sm text-foreground-muted">
              {SITE_CONFIG.skills.languages.map((skill) => (
                <li key={skill}>- {skill}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-accent">frameworks & tools</h3>
            <ul className="space-y-1 font-mono text-sm text-foreground-muted">
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
