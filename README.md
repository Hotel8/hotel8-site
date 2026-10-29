# Hotel8:Site - hotel8.dev
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../LICENSE)
[![Built with Flutter](https://img.shields.io/badge/Built%20with-Flutter-blue.svg)](https://flutter.dev/)
[![Docs](https://img.shields.io/badge/docs/read-3aa757.svg)](https://hotel8.dev/docs/services/site)
[![Website](https://img.shields.io/badge/website-hotel8.dev-1a73e8.svg)](https://hotel8.dev/docs/products/hotel8-site)

> The Hotel8 public website at [hotel8.dev](https://hotel8.dev): every
> product, app, and SDK of the vertical, with its domain invariants
> and inherited security posture front and center. Built on
> `@sentin8/site-engine` (Docusaurus v3). Program design of record:
> `design/sentin8-websites-design.md` (WEB §4.5).

## 1. Summary

hotel8.dev is the Hotel8 vertical's product site: a landing page
detailing all six products and six apps, per-product
pages with use cases and API surfaces, the vertical's security
invariants, developer lifecycle, samples, and a **Reference** section
harvested at build time from each unit repo's own docs - the
repositories stay the source of truth.

## 2. Motivation

Hotel8's six services carry deep maintainer docs, but nothing explains to a hotel group's evaluation team what the vertical guarantees: property truth in one place, channel parity, delegated payments, and deterministic loyalty. This site is that layer - harvested so marketing never drifts from the code.

## 3. Architecture

```mermaid
graph TD
    SJ["site.json"] --> BUILD["docusaurus build"]
    ENGINE["@sentin8/site-engine (pinned)"] --> BUILD
    DOCS["docs/** (hand-authored)"] --> BUILD
    REPOS["Hotel8 repos (public)"] -- "harvest.mjs" --> REF["docs/reference/ (gitignored)"]
    REF --> BUILD
    BUILD --> PAGES["GitHub Pages (hotel8.dev)"]
```

## 4. Content map

| Route | Content |
|---|---|
| `/` | Hero · product cards · apps · SDK · invariant pillars · platform showcase |
| `/docs/` | Vertical overview |
| `/docs/products/{unit}` | Per product: use cases · API surface |
| `/docs/apps/{app}` | Per app: purpose, what it demonstrates |
| `/docs/security/` | Vertical invariants + inherited platform pillars |
| `/docs/developers/` · `/docs/samples/` | Dev story · first calls |
| `/docs/reference/{unit}/` | Harvested README/DESIGN/BUSINESS per unit |

## 5. Development

```bash
npm install
npm run harvest   # renders docs/reference/ from sibling repos (offline)
npm start
npm run build     # fails on broken links
```

Adding a unit: edit `site.json` → add `docs/products/{slug}.md` →
the harvester picks up the repo trio automatically.

## 6. Deployment

Push to `main` → `ci.yml` calls `Sentin8/sentin8-ci site.yml@ci-v1` →
harvest → build → GitHub Pages. Weekly scheduled rebuild refreshes
harvested content. Custom domain via `static/CNAME` (operator DNS
step:).

---

**Architecture & Design:** Hotel8:Site and its underlying concepts were designed by [Hamid Jahanzad](https://www.linkedin.com/in/hamidjahanzad/).
