# Mathematics Academic Homepage

A quiet, bilingual, data-driven academic homepage for a mathematics undergraduate. Built with Astro, TypeScript, and plain CSS, it produces a fast static site with very little client-side JavaScript. Chinese is the default at `/`; English is available at `/en/` through the header language switch.

All biography, education, interests, awards, experience, and project content in the first version is **placeholder content**. Replace it with verified information before publishing.

## Local development

Requires Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Astro will print a local address, normally `http://localhost:4321`. Other commands:

```bash
npm run check    # TypeScript and Astro diagnostics
npm run lint     # Astro template and code diagnostics
npm run build    # Check and build the production site into dist/
npm run preview  # Preview the production build locally
```

## Where to edit content

Each language has four parallel content files. Update both columns when both versions should show the same real experience:

| Content | Chinese (default) | English |
| --- | --- | --- |
| Profile, About, school, links, interests, courses, CV | `src/data/zh/profile.ts` | `src/data/profile.ts` |
| Awards and competitions | `src/data/zh/awards.ts` | `src/data/awards.ts` |
| Research, seminars, and experience | `src/data/zh/experience.ts` | `src/data/experience.ts` |
| Projects | `src/data/zh/projects.ts` | `src/data/projects.ts` |

Shared interfaces are in `src/data/types.ts`. Optional properties may be omitted; the page hides the corresponding row or link automatically.

Interface translations such as headings and button labels are centralized in `src/i18n/ui.ts`. Routine biography updates do not require editing page components.

### Change About

Edit the `about` array in `src/data/zh/profile.ts` for Chinese and `src/data/profile.ts` for English. Each item becomes one paragraph:

```ts
about: [
  'I am a mathematics undergraduate at ...',
  'I am currently studying ...',
],
```

Keep it factual and concise.

### Change the university

Update both the short hero affiliation and detailed education entry in `src/data/profile.ts`:

```ts
university: 'Your University',
education: [
  {
    university: 'Your University',
    degree: 'B.Sc. in Mathematics',
    major: 'Mathematics',
    startYear: '2024',
    endYear: '2028 (expected)',
    location: 'City, Country',
  },
],
```

Add another object to `education` for a second entry. `gpa`, `ranking`, and `coursework` are optional and can be deleted.

### Add an award

Add an object to `src/data/awards.ts`, ordered newest first:

```ts
{
  name: 'Official Award Name',
  competition: 'Official Competition Name',
  level: 'National · First Prize', // optional
  date: '2026',
  description: 'One factual sentence about the category or contribution.', // optional
  url: 'https://example.edu/official-result', // optional
},
```

Delete every placeholder award that you do not replace.

### Add a project

Add an object to `src/data/projects.ts`:

```ts
{
  name: 'Project Name',
  kind: 'Mathematical Modeling',
  date: '2026',
  description: 'The problem, approach, and main result in two short sentences.',
  role: 'Model design and numerical experiments', // optional
  topics: ['Optimization', 'Monte Carlo methods', 'Python'], // optional
  githubUrl: 'https://github.com/username/repository', // optional
  demoUrl: 'https://example.com/demo', // optional
  reportUrl: '/reports/project-report.pdf', // optional
  image: { // optional
    src: '/images/project-preview.webp',
    alt: 'Description of what the project image shows',
  },
},
```

Allowed `kind` values are in `src/data/types.ts`. Missing links, role, topics, or image are not rendered. Put reports in `public/reports/` and images in `public/images/`; create those folders when needed.

### Add an experience

Add an object to `src/data/experience.ts`:

```ts
{
  title: 'Undergraduate Reading Project',
  organization: 'Department of Mathematics, Your University', // optional
  advisor: 'Prof. Full Name', // optional
  date: 'Spring 2026',
  description: 'State what you studied, how you worked, and what you produced.',
  topics: ['Real analysis', 'Measure theory'], // optional
  url: 'https://example.edu/project', // optional
},
```

Omit `advisor` when there was no advisor; do not publish placeholder names.

### Change research interests

Edit `academicInterests` in `src/data/profile.ts`:

```ts
academicInterests: [
  'Functional Analysis',
  'Probability Theory',
  'Numerical Optimization',
],
```

### Add the CV

1. Put your real PDF at `public/cv.pdf`.
2. Keep `cvUrl: 'cv.pdf'` in `src/data/profile.ts`.
3. Delete `public/cv-README.txt` if desired.

Both Download CV links then work without component changes. To use another filename or an external file, change only `cvUrl` in `src/data/profile.ts`.

The repository intentionally does not include a fabricated CV. Until `public/cv.pdf` is added, the buttons demonstrate the final URL but return 404.

### Change contact information

Edit `email` and `socialLinks` in `src/data/profile.ts`:

```ts
email: {
  user: 'name',
  domain: 'university.edu',
},
socialLinks: [
  { label: 'GitHub', url: 'https://github.com/username' },
  { label: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000' },
],
```

The email is stored in two parts and assembled in the browser. This deters basic scraping only. With JavaScript disabled, a readable `[at]` / `[dot]` version remains.

### Add a portrait

This version deliberately has no portrait, keeping emphasis on academic information. To add one later:

1. Put an optimized file at `public/images/portrait.webp`.
2. Add an `image` field to the `Profile` type and data.
3. Render it once in the hero in `src/components/HomePage.astro` with descriptive alt text.

A portrait is the one content change that currently needs a small layout edit; routine profile updates do not.

## SEO and site identity

Before publishing, update:

- `canonicalUrl` in both `src/data/zh/profile.ts` and `src/data/profile.ts`.
- Placeholder text in `public/og-image.svg`.
- The sitemap URL in `public/robots.txt`.
- `public/favicon.svg` if you want a different monogram.

The page includes a canonical link, description, Open Graph metadata, favicon, robots rules, and generated sitemap.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys every push to `main`.

1. Create a GitHub repository and push this project to `main`.
2. Open **Settings → Pages** on GitHub.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`, or run the workflow manually from the Actions tab.

For a project repository such as `username.github.io/academic-homepage`, the workflow automatically builds with `/academic-homepage/` as its base path. No source edit is required for site assets or the CV.

For the special root repository `username.github.io`, remove this workflow line so the base remains `/`:

```yaml
BASE_PATH: /${{ github.event.repository.name }}
```

Then update `canonicalUrl`, `robots.txt`, and profile links. The same static output can be deployed to Cloudflare Pages or Vercel with build command `npm run build` and output directory `dist`.

## Languages

- `/` is the canonical default Chinese page.
- `/en/` is the English page.
- The header switch uses normal links, so it works without JavaScript.
- Both pages include `hreflang`, localized metadata, and the same responsive layout.
- Shared interface text lives in `src/i18n/ui.ts`; personal content remains in the language-specific data files.

The project intentionally uses two static routes instead of a runtime internationalization library. This keeps the site fast and makes every language URL indexable and directly shareable.

## Design and accessibility

- Semantic headings, landmarks, lists, articles, and native links/buttons.
- Visible keyboard focus and a skip link.
- Responsive navigation and layout from mobile through desktop.
- System color preference, manual theme toggle, and saved preference.
- Reduced-motion and print fallbacks.
- System fonts; no external fonts, analytics, or third-party scripts.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/                       # Static identity assets and future CV
├── src/
│   ├── data/                     # Routine content and TypeScript types
│   │   └── zh/                   # Default Chinese content
│   ├── components/HomePage.astro # Shared bilingual page renderer
│   ├── i18n/ui.ts                # Interface translations
│   ├── layouts/BaseLayout.astro  # Metadata, theme, email enhancement
│   ├── pages/index.astro         # Default Chinese route
│   ├── pages/en/index.astro      # English route
│   └── styles/global.css         # Responsive design system
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Both routes use one shared renderer, so layout and accessibility changes stay synchronized without abstracting every section into a separate component.
