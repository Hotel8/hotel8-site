---
sidebar_position: 1
---

# Hotel8 - the hospitality vertical

Hotel8 is property management, point of sale, distribution,
metasearch, loyalty, and guest upsell composed on the Sentin8
platform: six Rust services that own the hotel8 database, a unified
Rust SDK facade, and six Flutter apps. It contains **no platform
infrastructure of its own** - identity, events, storage, scheduling,
workflows, and supervision come from the platform; money movement is
delegated to [Bank8:Payments](https://bank8.dev/docs/products/payments/).

```mermaid
graph TD
    subgraph apps["Flutter apps"]
        EPMS["ePMS (staff)"]
        EPOS["ePOS (outlet)"]
        EBK["eBooking (guest)"]
        ECB["eCorpBooking (corporate)"]
        EGS["eGuest (guest)"]
        EKS["eKiosk (lobby)"]
    end
    subgraph vertical["hotel8 vertical"]
        PMS["Hotel8:PMS"]
        POS["Hotel8:POS"]
        UPS["Hotel8:Upsell"]
        DIS["Hotel8:Distrib"]
        MET["Hotel8:Meta"]
        LOY["Hotel8:Loyalty"]
    end
    EPMS & EPOS & EBK & ECB & EGS & EKS -->|"via Sentin8:BFF"| vertical
    PMS -->|"check-out events"| LOY
    PMS -->|"booking events"| UPS
    UPS -->|"pricing + payments"| POS
    DIS -->|"availability push"| MET
```

## The products

| Product | Role |
|---|---|
| [PMS](/docs/products/pms) | property management - rooms, rates, reservations, front desk |
| [POS](/docs/products/pos) | food & beverage point of sale - checks, kitchen routing |
| [Upsell](/docs/products/upsell) | the offer engine - context-appropriate guest offers |
| [Distrib](/docs/products/distrib) | channel distribution - OTA/GDS/wholesale connectivity |
| [Meta](/docs/products/meta) | metasearch - Google Hotel Ads, Trivago, Kayak |
| [Loyalty](/docs/products/loyalty) | the guest loyalty engine - programs, tiers, points |

## Security

Hotel8 inherits the platform's five pillars and adds hospitality
guarantees: property truth in one place, channel parity without
leaks, payments delegated never duplicated, and deterministic
loyalty. Read the [security page](/docs/security).