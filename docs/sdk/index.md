---
sidebar_position: 1
---

# hotel8 Rust SDK

The unified namespace facade: every hotel8 crate imports through
`hotel8::{service}::{…}` - the typed integration surface for every
hotel8 API, consumed as a pinned git tag.

```rust
use hotel8::pms::contracts::Reservation;
use hotel8::pos::client::PosClient;
```

## What's in the facade

| Import path | Role |
|---|---|
| `hotel8::pms::{contracts,client}` | reservations, inventory, rates, folios, housekeeping |
| `hotel8::pos::{contracts,client}` | outlets, checks, menu, kitchen routing |
| `hotel8::upsell::{contracts,client}` | offers, templates, guest eligibility |
| `hotel8::distrib::{contracts,client}` | channels, mapping, sync |
| `hotel8::meta::{contracts,client}` | metasearch channels, bids, signals |
| `hotel8::loyalty::{contracts,client}` | members, points, tiers, redemptions |

## Conventions

- The platform arrives via `sentin8::*` only (the pinned platform SDK
  tag); the vertical never links platform service crates directly.
- Scopes: `hotel8:{service}:{resource}:{action}`, runtime-registered
  at enrollment.
- Events: `hotel8:{service}:{resource}:{operation}` over the
  platform's local-outbox → Bus producer path.

## Deep dive

[hotel8-sdk reference](/docs/reference/sdk/) - harvested from
`Hotel8/hotel8-sdk`.