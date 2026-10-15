---
sidebar_position: 3
---

# eBooking — guest booking app

The guest booking experience: availability search with live rates,
reservation booking and management, and the guest's own stay surface.

## What it demonstrates

- **Live availability** — property search over PMS's inventory with
  rate display honoring seasons, restrictions, and packages.
- **Booking integrity** — the booking flow retries safely
  (idempotency keys); the price quoted is the price booked.
- **Fail-closed bootstrap** — unknown host or missing runtime
  context renders the error scaffold, never a guessed config.

## Deep dive

[eBooking reference](/docs/reference/ebooking/) — harvested from
`Hotel8/hotel8-ebooking`.