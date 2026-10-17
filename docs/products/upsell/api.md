---
title: "Hotel8:Upsell - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Hotel8/hotel8-upsell/edit/main/docs/openapi.json
---
Sentin8 Hotel8:Upsell - Upsell Engine service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**3 endpoints**.

## upsell

### `GET /v1/admin/offers`

`GET /v1/offers`

Gate: `upsell:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of offers | - |
| 403 | Missing `upsell:admin` scope | - |

### `POST /v1/admin/offers`

`POST /v1/offers`

Gate: `upsell:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Offer created | - |
| 403 | Missing `upsell:admin` scope | - |

### `GET /v1/admin/offers/{id}`

`GET /v1/offers/status`

Gate: `upsell:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Offer status | - |
| 403 | Missing `upsell:admin` scope | - |

