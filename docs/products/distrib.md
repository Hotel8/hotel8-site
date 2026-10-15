---
sidebar_position: 5
---

# Hotel8:Distrib — Channel Distribution

The channel-distribution service: it registers distribution channels
(OTAs, GDS, wholesalers, corporate, metasearch), maps channel-side
properties, room types, and rate plans to hotel8's inventory, and
pushes availability and restrictions outward — channel parity without
unvalidated inward writes.

## Use cases

- **Channel registration** — a property connects Expedia, Booking.com,
  Amadeus, or a wholesaler; credentials live as secret references in
  Sentin8:Secrets, never in application tables.
- **Mapping** — channel-side room types and rate plans map to hotel8
  inventory once; every sync reuses the mapping.
- **Availability sync** — inventory changes push to channels on the
  event; restrictions (minimum stay, closed-to-arrival) flow with
  them.
- **Reservation import** — channel bookings arrive through the
  channel's native API and materialize as PMS reservations with
  their source attribution.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Channels | register, configure, credentials | `hotel8:distrib:channels:write` |
| Mapping | room/rate mapping | `hotel8:distrib:mapping:read` |
| Sync | push availability, restrictions | `hotel8:distrib:sync:write` |
| Reservations | import, attribution | `hotel8:distrib:reservations:write` |

## Deep dive

[Distrib reference](/docs/reference/distrib/) — harvested from
`Hotel8/hotel8-distrib`.