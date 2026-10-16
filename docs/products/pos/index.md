---
sidebar_position: 3
---

# Hotel8:POS — Point of Sale

The food-and-beverage point-of-sale service: outlets, service areas,
tables, menu with modifiers, checks with split/merge lifecycle,
kitchen routing, and payments — every check settlement rides the
delegated payment path.

## Use cases

- **Table service** — open checks against tables, order items with
  modifier groups, split and merge checks through their lifecycle.
- **Kitchen routing** — items route to their preparation stations
  (bar, hot line, cold line) by course and outlet configuration.
- **Menu engineering** — outlets own menus with modifiers, pricing
  overrides, and time-of-day availability.
- **Payments** — checks settle through card capture on the outlet
  device; the money movement itself is delegated to
  [Bank8:Payments](https://bank8.dev/docs/products/payments/).
- **Post-to-room** — restaurant charges may post to a guest folio in
  PMS, sharing the same cashiering truth.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Checks | open, order, split, merge, settle | `hotel8:pos:checks:write` |
| Menu | outlets, items, modifiers | `hotel8:pos:menu:read` |
| Tables | status, sections | `hotel8:pos:tables:read` |
| Kitchen | routing, station queues | `hotel8:pos:kitchen:write` |
| Payments | capture, post-to-room | `hotel8:pos:payments:write` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/pos/) — the maintainer's README in the consolidated reference section.

