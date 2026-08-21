# Ravi Dhileeban — Portfolio

Personal portfolio of **Ravi Dhileeban**, Full Stack .NET & Angular Developer.
A single-page, statically hosted Angular application with no backend and no secrets.

**Live site:** https://ravidhileeban.github.io/ravi-dhileeban/

---

## About

The site presents professional experience, featured projects, technical skills,
application architecture, Azure usage, database engineering and development workflow
in one page with anchor-based navigation.

Design notes:

- Dark enterprise theme — navy surfaces, hairline borders, a single cyan accent.
- No skill percentage bars, no invented statistics, no stock imagery.
- Semantic HTML, keyboard-accessible navigation, visible focus states, skip link.
- Fully responsive from 320 px upward, with no horizontal scrolling.

---

## Technologies

**This site is built with**

| Area | Technology |
| --- | --- |
| Framework | Angular 20 (standalone components, `OnPush` change detection) |
| Language | TypeScript |
| Styling | SCSS / CSS custom properties |
| Markup | Semantic HTML5 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

No UI component library, no CSS framework and no animation library — the whole
production bundle is well under 100 kB transferred.

**Technologies the portfolio describes**

Angular · TypeScript · JavaScript · C# · .NET · ASP.NET Core · ASP.NET MVC · Web API ·
Entity Framework Core · Dapper · SQL Server · PostgreSQL · Microsoft Azure (Key Vault,
Storage, Blob Storage, Queue Storage, Functions). Foundational: CI/CD, Docker, Kafka.

---

## Project Structure

```
ravi-dhileeban/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages build + deploy
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── resume/
│   │       └── Ravi-Dhileeban-Resume.pdf   # drop your PDF here
│   ├── .nojekyll
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── components/           # shared UI: header, footer, section heading
│   │   │   ├── section-heading.ts
│   │   │   ├── site-footer.ts
│   │   │   └── site-header.ts
│   │   ├── data/                 # ALL CONTENT LIVES HERE
│   │   │   ├── experience.data.ts
│   │   │   ├── navigation.data.ts
│   │   │   ├── platform.data.ts  # architecture, Azure, database, workflow
│   │   │   ├── profile.data.ts   # name, contact, social links, education
│   │   │   ├── projects.data.ts
│   │   │   └── skills.data.ts
│   │   ├── models/
│   │   │   └── portfolio.models.ts
│   │   ├── sections/             # one standalone component per page section
│   │   │   ├── about/  architecture/  azure/  contact/  database/
│   │   │   ├── engineering/  experience/  hero/  projects/
│   │   │   └── resume/  skills/  workflow/
│   │   ├── app.config.ts
│   │   └── app.ts                # composes the page
│   ├── index.html                # title, meta description, Open Graph, JSON-LD
│   ├── main.ts
│   └── styles.scss               # design tokens + shared component styles
├── angular.json
├── package.json
└── README.md
```

Content is deliberately separated from UI: components read from `src/app/data/*`,
so updating the site normally means editing a data file only.

There is no Angular Router. The page is a single document with anchor links, which
avoids client-side routing problems on GitHub Pages entirely.

---

## Local Development

**Requirements**

- Node.js **20.19+ / 22.12+ / 24+** (built and verified on Node 22)
- npm 10 or newer

**Install and run**

```bash
npm install
npm start
```

Then open http://localhost:4200/ — the dev server reloads on save.

---

## Production Build

```bash
# Standard production build
npm run build

# Production build configured for GitHub Pages (base href /ravi-dhileeban/)
npm run build:gh-pages
```

Output is written to `dist/ravi-dhileeban/browser/`.

To preview the GitHub Pages build exactly as it will be served:

```bash
npm run build:gh-pages
npx http-server dist/ravi-dhileeban -p 8080
# open http://localhost:8080/browser/
```

---

## GitHub Repository

Create a **public** repository named `ravi-dhileeban`, then:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ravidhileeban/ravi-dhileeban.git
git push -u origin main
```

If the repository already has commits, push to `main` as usual:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## GitHub Pages Deployment

One-time setup after the first push:

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Go to the **Actions** tab and confirm the *Deploy to GitHub Pages* workflow ran.

The site is then published at:

```
https://ravidhileeban.github.io/ravi-dhileeban/
```

Every later push to `main` redeploys automatically — no manual step.

---

## GitHub Actions

`.github/workflows/deploy.yml` runs on every push to `main` (and can be run manually
from the Actions tab). It:

1. Checks out the repository.
2. Installs Node.js 22 with npm caching.
3. Runs `npm ci`.
4. Runs `npm run build:gh-pages` (production build, `--base-href /ravi-dhileeban/`).
5. Copies `index.html` to `404.html` and adds `.nojekyll`.
6. Uploads `dist/ravi-dhileeban/browser` and deploys it with `actions/deploy-pages`.

If you rename the repository, update **three** places:

- `base-href` in the `build:gh-pages` script in `package.json`
- `baseHref` in `angular.json` (production configuration)
- the `outputPath` / artifact paths in `angular.json` and `deploy.yml`

---

## Updating Portfolio Content

Everything below is edited in `src/app/data/` — no component changes needed.

| What you want to change | File |
| --- | --- |
| Name, title, tagline, summary, location, email, social links, education | `profile.data.ts` |
| Technical skill groups and foundational technologies | `skills.data.ts` |
| Engineering & development practices | `skills.data.ts` (`ENGINEERING_GROUPS`) |
| Roles, dates, responsibilities, contributions | `experience.data.ts` |
| Featured projects | `projects.data.ts` |
| Architecture layers, Azure services, database groups, workflow steps | `platform.data.ts` |
| Navigation items | `navigation.data.ts` |

**Placeholders to replace before publishing**

- `[COMPANY NAME]` for the March–June 2023 internship in `experience.data.ts`
- `repoUrl` / `demoUrl` in `projects.data.ts` (currently `null`, which renders the
  `[GitHub Repository]` / `[Live Demo]` placeholders)

---

## Resume

Place your PDF at:

```
public/assets/resume/Ravi-Dhileeban-Resume.pdf
```

Replacing that file updates every download link on the site. To use a different
file name, change `resumePath` in `src/app/data/profile.data.ts`.

---

## Adding a New Project

Append an entry to `PROJECTS` in `src/app/data/projects.data.ts`:

```ts
{
  name: 'Project Name',
  category: 'Short category line',
  summary: 'One or two sentences describing the product.',
  role: 'Full Stack Developer',
  responsibilities: ['…'],
  highlights: ['…'],
  architecture: ['Angular UI', 'ASP.NET Core Web API', 'SQL Server'],
  technologies: ['Angular', '.NET Core', 'SQL Server'],
  repoUrl: null,   // or 'https://github.com/…'
  demoUrl: null,   // or 'https://…'
}
```

The card, badges and architecture column render automatically.

---

## Custom Domain Setup

The site works on `github.io` as-is. To move it to a domain such as
`ravidhileeban.dev` later:

1. **Buy the domain** from any registrar.
2. **DNS records** at the registrar:
   - Apex domain (`ravidhileeban.dev`) — four `A` records to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and the matching `AAAA` records if you want IPv6).
   - Subdomain (`www.ravidhileeban.dev`) — one `CNAME` to
     `ravidhileeban.github.io`.
3. **GitHub** → repository **Settings** → **Pages** → *Custom domain* → enter the
   domain and save, then tick **Enforce HTTPS** once the certificate is issued.
4. **Change the base href to root**, since a custom domain serves from `/`:
   - `package.json` → `"build:gh-pages": "ng build --configuration production --base-href /"`
   - `angular.json` → production `baseHref` → `"/"`
5. Add a `public/CNAME` file containing just the domain, so the setting survives
   redeploys:
   ```
   ravidhileeban.dev
   ```
6. Update the canonical and Open Graph URLs in `src/index.html`.

---

## Security

This is a static site with no backend, no forms posting anywhere and no API calls.
Nothing in the repository requires credentials — do not add API keys, connection
strings, Azure credentials, client secrets or internal URLs to it.

---

## License

Content (text, resume, project descriptions) © Ravi Dhileeban. The source code may
be reused as a template with attribution.
