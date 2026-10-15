---
sidebar_position: 7
---

# Hotel8:Loyalty — Guest Loyalty Program

The guest-loyalty engine: it defines reward programs and tiers,
enrolls and links members, awards stay points from PMS check-out
events, meters earning rules, and processes redemptions —
deterministic, event-sourced, auditable.

## Use cases

- **Programs & tiers** — per-brand programs with tier thresholds and
  benefits; tier progress derives from stay events, never a batch
  job's recompute.
- **Member enrollment** — guests enroll (app, front desk, corporate
  import); members link across properties and brands.
- **Stay points** — check-out events award points through declarative
  earning rules (base × elite multiplier, promotion windows);
  redemptions decrement balances with full audit.
- **Redemptions** — free-night certificates, folio discounts, and
  partner redemptions all flow through the same audited path.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Members | enroll, link, profile | `hotel8:loyalty:members:write` |
| Points | award, adjust, balance | `hotel8:loyalty:points:read` |
| Tiers | progress, benefits | `hotel8:loyalty:tiers:read` |
| Redemptions | certificates, folio discounts | `hotel8:loyalty:redemptions:write` |

## Deep dive

[Loyalty reference](/docs/reference/loyalty/) — harvested from
`Hotel8/hotel8-loyalty`.