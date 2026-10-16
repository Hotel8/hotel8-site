---
sidebar_position: 6
---

# Hotel8:Meta — Metasearch Integration

The metasearch integration service (Google Hotel Ads, Trivago, Kayak,
TripAdvisor, Skyscanner, Bing): channel registration, bid/pricing
sync, and booking-link integrity — the metasearch tier of the
distribution story.

## Use cases

- **Channel registration** — each metasearch engine connects with its
  native surface (Hotel Ads accounts, Trivago rate feeds).
- **Bid & price sync** — live rates and availability push per
  property; bid strategies configure per channel and season.
- **Booking links** — metasearch click-throughs land on the booking
  app with integrity — the price the guest saw is the price the
  booking flow quotes.
- **Performance signals** — impressions, clicks, and bookings flow
  back for channel ROI measurement.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Channels | register, configure | `hotel8:meta:channels:write` |
| Bids | strategies, sync | `hotel8:meta:bids:read` |
| Prices | rate pushes | `hotel8:meta:prices:write` |
| Signals | impressions, clicks, bookings | `hotel8:meta:signals:read` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/meta/) — the maintainer's README in the consolidated reference section.

