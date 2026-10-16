---
sidebar_position: 6
---

# eKiosk - lobby kiosk

The lobby self-service kiosk: check-in and check-out, room-key
pickup, and upsell surfacing - the unattended guest touchpoint.

## What it demonstrates

- **Self check-in/out** - the kiosk drives the same PMS APIs the
  front desk uses, behind the same authorization; a kiosk session is
  a scoped identity, not a shared credential.
- **Key integration points** - the check-in flow connects to the
  property's key-cutting hardware through the app's configured
  integrations.
- **Upsell at the door** - arrival-time offers surface exactly like
  the other guest apps.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/ekiosk/) - the maintainer's README in the consolidated reference section.

