---
sidebar_position: 2
---

# Hotel8:PMS — Property Management System

The property-management core of the vertical: it owns properties,
room inventory, rate plans, reservations, front-desk operations,
housekeeping, cashiering (folios), and group blocks — the system of
record for the hotel's operational truth. Every other hotel8 service
composes against PMS; none shadow-writes it.

## Use cases

### Front desk & operations
- **Reservations lifecycle** — create, modify, check-in, check-out,
  no-show; room assignment with housekeeping-aware availability.
- **Room inventory** — per-date availability and restrictions; rate
  plans with seasons, derived rates, and package attachments.
- **Housekeeping** — room status boards driven by check-out events;
  inspection workflow.
- **Group blocks** — room blocks with allocation and release dates
  for corporate and event bookings.

### Cashiering
- **Folios** — charges from PMS and POS post to guest folios;
  settlement collects through the delegated payment path
  (Bank8:Payments), never a re-implemented rail.
- **Night audit** — the operational day closes through scheduled
  platform work (Sentin8:Cron proxy-back), producing the audit trail.

### Events out
- Booking, check-in, and check-out events publish to Sentin8:Bus —
  Loyalty awards stay points from check-out; Upsell generates offers
  from booking events; Distrib synchronizes channels from inventory
  changes.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Reservations | `GET/POST /v1/reservations`, check-in/out, room moves | `hotel8:pms:reservations:write` |
| Inventory | availability, restrictions, room types | `hotel8:pms:inventory:read` |
| Rate plans | plans, seasons, derived rates | `hotel8:pms:rates:read` |
| Folios | charges, payments, settlement | `hotel8:pms:folios:write` |
| Housekeeping | room status, assignments | `hotel8:pms:housekeeping:write` |
| Group blocks | blocks, allocations, releases | `hotel8:pms:blocks:write` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/pms/) — the maintainer's README in the consolidated reference section.

