# Changelog

All notable changes to this project will be documented in this file.

## 1.2.0 - Upgrade to Astro 7 and dependencies (27 Sep 2026)
### Changes
- Upgrade Astro from 6.4.4 to 7.3.5 (Vite 8, Rust compiler, Sätteri Markdown processor, `compressHTML: 'jsx'` default)
- Upgrade `astro-purgecss` from 6 to 7 (required for Astro 7)
- Upgrade `@astrojs/sitemap` to 3.7.4
- Upgrade `cssnano` and `cssnano-preset-advanced` from 7 to 9 (requires Node `^22.22.3 || ^24.15.0 || >=26.0`)
- Upgrade `autoprefixer` to 10.6.1
- Upgrade Playwright to 1.63.0
- Upgrade `@axe-core/playwright` to 4.13.0
- Upgrade `@types/node` from 25 to 26

## 1.1.1 - Add CLAUDE.md (6 Jun 2026)
### Changes
- Added `CLAUDE.md` with build/test commands and architecture guidance for Claude Code
- Added `CLAUDE.md` to `.gitignore`

## 1.1.0 - Upgrade Playwright to 1.60.0 (6 Jun 2026)
### Changes
- Upgrade Playwright to 1.60.0

## 1.0.9 - Upgrade to Astro 6 (6 Jun 2026)
### Changes
- Upgrade to Astro `6.4.4`
- Upgrade vulnerabilities

## 1.0.8 - Enable analytics tracking (6 Jun 2026)
### Changes
- Removed `data-do-not-track` attribute from Webuma analytics script to enable tracking

## 1.0.7 - Upgrade dependencies (8 Feb 2026)
### Changes
- Upgraded all dependencies to prevent vulnerabilities

## 1.0.6 - Accessibility Tests Added
### Changes
- Added Axe Accessibility tests via Playwright to all pages

## 1.0.5 - CLA added
### Changes
- Broken CLA link added

## 1.0.4 - Playwright Integration
### Changes
- Added Playwright integration
- Wrote E2E tests for current pages and features
- CI integration

## 1.0.3 - CSS Bundling Improvements
### Changes
- Added PostCSS config with autoprefixer and CSSNano
- Added `.nvmrc` file for node.js version compatibility

## 1.0.2 - SEO Fixes
### Changes
- Font linking fix
- OG image fixes
- Astro config remove `trailingSlash` as it won't work for SSG

## 1.0.1 - Website ready to deploy
### Changes
- Website structure and SEO complete
- All pages completed
- Purge CSS, Sitemap complete
- Updated README

## 1.0.0
### Changes
- Initial Commit with signed key.