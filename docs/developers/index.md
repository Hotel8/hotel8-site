---
sidebar_position: 1
---

# Developers — building on hotel8

## The single-repo story

Clone any hotel8 service and build — the platform SDK and the hotel8
facade arrive as pinned git dependencies; committed `.sqlx` caches
mean no live database is needed to compile:

```bash
git clone https://github.com/Hotel8/hotel8-pms.git
cd hotel8-pms
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey
sentin8-cli db bootstrap
vertical init        # creates the hotel8 database + per-service schemas
vertical enroll      # registers services, scopes, admin UIs, triggers
make start           # captain spawns the fleet (platform + hotel8)
```

No migration code exists — greenfield: schema changes rewrite the
init SQL and re-run `vertical init`.

## Integration surface

- **Rust**: the `hotel8` facade (`hotel8::pms::…`, `hotel8::pos::…`)
  — see the [SDK page](/docs/sdk/)
- **Flutter**: `Bff8ApiClient` through the platform's Flutter package
  (see [samples](/docs/samples))
- **Events**: subscribe to `hotel8:{service}:{resource}:{operation}`
  through Sentin8:Bus

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.