# Wang (Steven) Liao — Personal Website

Professional portfolio focused on business analytics, sports analytics, and data analytics, with academic research and teaching retained.

Live website: https://wang-steven-liao-academic.stevenl960823.chatgpt.site

## Update content

- `data/profile.ts`: biography, experience, education, teaching, research, and professional links.
- `data/portfolio.ts`: selected experience, analytical toolkit, and completed analytics case studies.
- `app/page.tsx`: responsive homepage and reusable presentation components.
- `app/globals.css`: shared navy/cyan theme and responsive styles.

The project section has an existing NBA salary/performance study with supporting materials pending, and four explicitly proposed project briefs. Update `existingStudy` and `projectBriefs` in `data/portfolio.ts` as evidence becomes available. `portfolioProjects` remains empty until full artifacts and findings are reviewed; adding an entry displays the completed case study. Include a question, verified finding, data disclosure, and working code/dashboard links.

## Develop

Install the locked dependencies with npm, run `npm run dev`, and run `npm run build` before publishing. The site uses React, Vinext, Tailwind, and the existing Base UI component catalog.

## Source and publication

This GitHub repository stores the website source. Sites hosts the live website and retains its own publishing repository. A commit to GitHub alone does not update the live site; changes must also be built and published through Sites. No automatic GitHub-to-Sites publishing workflow is configured.

The current résumé download is `public/wang-liao-resume.pdf`, refined from the supplied Wang_Liao_Resume_DA.pdf with its one-page layout preserved. The cover letter informs the general professional narrative; its employer-specific application text is not published. The academic CV is retained as a separate older source.

Keep credentials, environment secrets, dependency folders, build output, and private job-search/application records out of this repository. Never publish client or donor records as project data.
