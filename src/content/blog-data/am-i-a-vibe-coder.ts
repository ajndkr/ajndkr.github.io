export const metadata = {
  title: "am i a vibe coder?",
  date: "2025-04-01",
  excerpt: "my 2 cents on vibe coding",
};

export const content = `
## am i a vibe coder now?

for those who are unaware of this new buzz word eating the tech world, **vibe
coding** is term coined by Andrej Karpathy. he describes it as "a new kind of
coding where you fully give in to the vibes, embrace exponentials, and forget
that the code even exists."

initially skeptical, i decided to give it a shot when faced with a recurring
problem: our team is constantly slowed down during incident response.
investigating production issues means tediously jumping between kubernetes logs
and multiple databases, with each incident taking 5-10 minutes of
context-switching. our django admin panels are also painfully slow, and while
we're working on a proper architectural redesign, that solution is months away.

after burning half an hour investigating multiple incidents back-to-back, i
decided, "screw it, let's fix this".

i went straight to Claude for initial brainstorming and quickly spun up a
minimal FastAPI backend (literally two files - one endpoint and one for database
operations), and used Bolt to generate a minimal react dashboard in under 5
prompts. within four hours, i had a working mvp running locally that could fetch
all the relevant information in one place.

but here's where things got interesting: **deployment**. even with ai assistance,
setting up deployment scripts for Google CloudRun and Firebase was surprisingly
time-consuming due to hidden complexities. this highlights the current frontier
of vibe coding - while ai tools excel at generating code in controlled
environments, they still struggle with the messy realities of cloud ecosystems
and their quirks. when these tools eventually master infrastructure-as-code, the
final piece of the puzzle will fall into place.

**the most liberating part?** since i "vibe coded" this project, the code is
essentially throwaway. we can scrap the whole thing and rebuild if needed -
something quite vital in a startup environment where features can be built and
discarded at a fast pace. this project wasn't about building a perfect,
maintainable system. it was about solving immediate problems with minimal
investment.

vibe coding feels like a glimpse into a future where the barrier between idea
and implementation becomes increasingly thin.

p.s. i finally subscribed to Windsurf AI, and now feature updates take just a
few prompts to implement. the entire experience has me thinking about
development differently - sometimes rebuilding becomes more economical than
maintaining, especially with ai assistance making creation so inexpensive.

### references

- [Andrej Karpathy's X post](https://x.com/karpathy/status/1886192184808149383)
- [Claude](https://claude.ai/)
- [Bolt.new](https://bolt.new/)
- [Windsurf AI](https://codeium.com/windsurf)
`;
