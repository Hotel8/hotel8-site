---
sidebar_position: 1
---

# Security

Hotel8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction - every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS
on `env_id`.

## The vertical's own invariants

1. **Property truth in one place** - PMS owns reservations,
   inventory, and folios; Distrib, Meta, Upsell, and Loyalty compose
   against its API and events, never shadow-write it.
2. **Channel parity without leaks** - availability and restrictions
   flow outward through channel mappings; inward writes (channel
   reservations) validate against PMS's own rules before
   materializing.
3. **Payments delegated, never duplicated** - POS and PMS cashiering
   collect; card rails ride
   [Bank8:Payments](https://bank8.dev/docs/products/payments/); hotel8
   never stores PAN/CVV (secret references only, PCI posture by
   delegation).
4. **Loyalty is deterministic** - stay points derive from check-out
   events through declarative earning rules; every award and
   redemption is event-sourced and auditable.
5. **Workload identity everywhere** - Upsell's pricing lanes and
   Distrib's channel syncs present Acme-issued workload certificates;
   no static tokens exist in the vertical.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security).