# Repository Guidelines
Keep contributions consistent and production ready by following these practices.

## Project Structure & Module Organization
- `src/main.tsx` bootstraps `App.tsx`, which registers routing, theming, and shared providers.
- `src/components/` houses reusable UI; `src/pages/` holds routed views; `src/content/` stores Markdown-driven sections.
- `src/integrations/supabase/` defines typed clients, while `supabase/functions/` contains edge handlers such as `contact-form`.
- Assets stay in `public/`; generated output lands in `dist/` and must remain uncommitted.

## Build, Test, and Development Commands
- `npm install` after fresh clones or lockfile updates.
- `npm run dev` starts Vite on `http://localhost:5173/`.
- `npm run build` validates production output; add `--mode development` when debugging prod-only issues.
- `npm run preview` serves the compiled build for smoke tests.
- `npm run lint` runs ESLint (`eslint.config.js`).

## Coding Style & Naming Conventions
- TypeScript + functional React; prefer explicit helper return types and guard clauses.
- Stick to two-space indentation. Components use PascalCase, hooks `useCamelCase`, utilities camelCase.
- Import via the `@/` alias (see `tsconfig.json`) instead of long relative paths.
- Tailwind is canonical styling; group utilities by layout/color/state and share tokens through `tailwind.config.ts`.

## Testing Guidelines
- No automated tests yet; document manual QA steps in PRs until Vitest + Testing Library are introduced.
- When adding tests, colocate `*.test.ts(x)` files beside the module and keep them fast enough for CI.
- Always smoke-test `/projects` and the contact form through `npm run preview`, noting browser/device coverage.

## Commit & Pull Request Guidelines
- Match existing history: short, present-tense summaries (`Add animated project carousel`) with optional scopes.
- Squash incidental fixes; each commit should represent one concern.
- PRs need context, screenshots for UI updates, manual QA notes, and links to related Supabase migrations.
- Ensure `npm run build` and `npm run lint` pass before requesting review; flag follow-ups in the description.

## Supabase & Configuration Tips
- Supply `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`; without them the app logs a warning and degrades gracefully.
- Use the Supabase CLI (`supabase functions serve contact-form`) for local edge testing and keep secrets out of the repo.
- Confirm `supabase/config.toml` matches your target project before deploying.
