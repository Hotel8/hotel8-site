---
sidebar_position: 4
---

# Hotel8:Upsell - Offer Engine

The offer-generation and guest-upsell engine: it reacts to PMS
booking events, generates context-appropriate offers (room upgrades,
early check-in, late check-out, services), prices them, and delivers
them to the guest surfaces - with tenant-authored hooks running in
Sentin8:Func.

## Use cases

- **Contextual offers** - a booking event (room type, stay dates,
  party profile) triggers offer generation; the same inputs always
  produce the same offer set - the pricing lanes are deterministic
  functions, not black boxes.
- **Dynamic pricing** - offers price against the property's live
  inventory and rate rules; the pricing path presents the vertical's
  workload certificate, never a static token.
- **Guest delivery** - offers surface in eBooking, eGuest, and eKiosk;
  acceptance flows back as a folio charge or reservation change.
- **Tenant hooks** - property-authored offer logic (custom bundles,
  loyalty-weighted pricing) runs as WASM functions in the platform's
  Func service - zero platform redeploys per property.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Offers | generate, list, accept, decline | `hotel8:upsell:offers:write` |
| Templates | offer templates, rules | `hotel8:upsell:templates:write` |
| Guest context | eligibility queries | `hotel8:upsell:guest:read` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/upsell/) - the maintainer's README in the consolidated reference section.

