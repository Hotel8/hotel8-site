---
sidebar_position: 3
---

# eBooking - guest booking app

The guest booking experience: availability search with live rates,
reservation booking and management, and the guest's own stay surface.

## What it demonstrates

- **Live availability** - property search over PMS's inventory with
  rate display honoring seasons, restrictions, and packages.
- **Booking integrity** - the booking flow retries safely
  (idempotency keys); the price quoted is the price booked.
- **Fail-closed bootstrap** - unknown host or missing runtime
  context renders the error scaffold, never a guessed config.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/ebooking/) - the maintainer's README in the consolidated reference section.

