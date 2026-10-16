---
title: "Hotel8:POS - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Hotel8/hotel8-pos/edit/main/docs/openapi.json
---
Sentin8 H8POS - Point of Sale service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**5 endpoints**.

## pos

### `GET /v1/admin/orders`

`GET /v1/outlets/{outlet_id}/checks`

Gate: `pos:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of orders | - |
| 403 | Missing pos:admin scope | - |

### `POST /v1/admin/orders`

`POST /v1/outlets/{outlet_id}/checks`

Gate: `pos:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Check created | - |
| 403 | Missing pos:admin scope | - |

### `GET /v1/admin/orders/{id}`

`GET /v1/outlets/{outlet_id}/checks/{check_id}`

Gate: `pos:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Check details | - |
| 403 | Missing pos:admin scope | - |
| 404 | Check not found | - |

### `POST /v1/admin/payments`

`POST /v1/outlets/{outlet_id}/checks/{check_id}/payments`

Gate: `pos:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payment posted | - |
| 403 | Missing pos:admin scope | - |

### `GET /v1/admin/reports`

`GET /v1/outlets/{outlet_id}/reports/sales`

Gate: `pos:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Daily sales summary report | - |
| 403 | Missing pos:admin scope | - |

