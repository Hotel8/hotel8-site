---
sidebar_position: 1
---

# Samples

First calls against a running hotel8 deployment - through the BFF
proxy, from cURL and Dart.

## 1. Search availability and book a room (guest flow)

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  "https://bff.{env}.{org}.example.com/proxy/pms/v1/availability?property_id=<id>&from=2026-11-01&to=2026-11-03&guests=2"

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/pms/v1/reservations \
  -H 'content-type: application/json' \
  -d '{
    "property_id": "<property>",
    "room_type_id": "<room-type>",
    "rate_plan_id": "<rate-plan>",
    "from": "2026-11-01",
    "to": "2026-11-03",
    "guests": [{"name": "Guest Name"}],
    "idempotency_key": "book-001"
  }'
```

The booking publishes `hotel8:pms:reservation:created` - Loyalty,
Upsell, and Distrib all react to it through their Bus consumers.

## 2. Open and settle a POS check

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/pos/v1/checks \
  -H 'content-type: application/json' \
  -d '{"outlet_id": "<outlet>", "table_id": "<table>"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/pos/v1/checks/{id}/order \
  -H 'content-type: application/json' \
  -d '{"items": [{"menu_item_id": "<item>", "qty": 2}]}'
```

Settlement captures the card and delegates the money movement to
Bank8:Payments - POS never touches a raw card rail.

## 3. Enroll a loyalty member

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/loyalty/v1/members \
  -H 'content-type: application/json' \
  -d '{"program_id": "<program>", "guest_id": "<guest>"}'
```

## 4. From Dart (the eBooking pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

final availability = await bff.get(
  'pms',
  '/v1/availability?property_id=$id&from=2026-11-01&to=2026-11-03',
);
await bff.post('pms', '/v1/reservations', body: reservationPayload);
```

## 5. From Rust (vertical consumer)

```rust
use hotel8::pms::client::PmsClient;

let reservations = pms_client
    .reservations(&query)
    .await?;
```

The client rides the platform's certificate-presenting transport - no
token configuration, no static secret to leak.