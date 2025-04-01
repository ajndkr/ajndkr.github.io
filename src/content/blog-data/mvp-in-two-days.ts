export const metadata = {
  title: "mvp in 2 days",
  date: "2025-03-24",
  excerpt: "building mvp version of PR Pulse, an ai-powered report generator",
};

export const content = `
just built an mvp in less than 2 days that will soon solve a real problem for my
team.

i built **PR Pulse**, a tiny ai tool that generates weekly reports of all merged prs
in a GitHub repository. it's written in Python (using Typer) and i've also
published it in the GitHub Actions marketplace. the reports are generated using
Gemini AI to provide useful summaries (i chose Gemini as Google made Gemini 2.0
free for all). the generated reports can be published on Slack (using Slack
Python SDK).

as head of engineering, i've been feeling the pain of our growing team not
having visibility into code changes. we're in the middle of a code migration,
and it's harder for everyone to review all prs. this makes debugging incidents
during on-call much more challenging.

#### my experience building this mvp:

my early attempts with Windsurf failed because i prompted the llm with the end
goal, generating too many files at once and leading to an overwhelming
experience. this time, i started with boilerplate code and built incrementally:

- first, fetching a list of all pull requests
- then fetching details of a single pr
- added summary generation for prs merged in a week
- built different formatting styles (table and json)
- added a write mode to dump json output to a file
- did prompt engineering on Google AI Studio
- added a command to generate reports using the summary
- published project in the GitHub Action marketplace
- built a notify command to post reports to Slack

what would have taken over a week took less than 2 days. Windsurf cut through
all the time normally spent on docs and searching StackOverflow.

#### some observations about Windsurf vs GitHub Copilot:

copilot is surprisingly limited! even though both use Claude 3.7 Sonnet as the
llm, the developer experience is wildly different. copilot generates code
one-shot style, while Windsurf takes time to understand the codebase first,
allows running changes in a temporary terminal, understands errors, and
automatically debugs.

i'm very likely to buy a Windsurf subscription after this experience. building
this mvp was fun and productive - looking forward to helping my team stay
informed once i ship it in the next few days.

### references

- [PR Pulse](https://github.com/marketplace/actions/pr-pulse)
- [Typer](https://typer.tiangolo.com/)
- [Windsurf](https://www.windsurf.ai/)
- [Google AI Studio](https://aistudio.google.com/)
- [UV Boilerplate](https://github.com/ajndkr/uv-boilerplate)
`;
