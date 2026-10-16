---
sidebar_position: 1
---

# The hotel8 apps

Six Flutter experiences - staff, outlet, guest, corporate, guest, and
kiosk - every one thin by design: all backend access rides the
Sentin8:BFF proxy, and no token ever reaches a client bundle.

| App | Who it serves |
|---|---|
| [ePMS](/docs/apps/epms) | property staff - front desk, housekeeping, cashiering |
| [ePOS](/docs/apps/epos) | outlet staff - table service, kitchen routing |
| [eBooking](/docs/apps/ebooking) | guests - availability search and booking |
| [eCorpBooking](/docs/apps/ecorpbooking) | corporate travelers - negotiated rates, policy booking |
| [eGuest](/docs/apps/eguest) | guests - digital check-in, folio, upsell offers, loyalty |
| [eKiosk](/docs/apps/ekiosk) | lobby - self check-in/out, key pickup |

Every app boots fail-closed: `fetchRuntimeContext()` resolves the
instance from the app's own origin - unknown host = error scaffold,
never a guess. Every backend read is a `DataState<T>` hook over a
typed BFF client; branding derives from the runtime context (instance
→ org → slug).

Each app's reference section carries its full docs:
[ePMS](/docs/reference/epms/), [ePOS](/docs/reference/epos/),
[eBooking](/docs/reference/ebooking/),
[eCorpBooking](/docs/reference/ecorpbooking/),
[eGuest](/docs/reference/eguest/), [eKiosk](/docs/reference/ekiosk/).