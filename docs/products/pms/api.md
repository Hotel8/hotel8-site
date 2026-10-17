---
title: "Hotel8:PMS - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Hotel8/hotel8-pms/edit/main/docs/openapi.json
---
Sentin8 Hotel8:PMS - Property Management System for the hospitality industry.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**10 endpoints**.

## pms

### `GET /v1/admin/blocks`

`GET /v1/properties/&#123;property_id&#125;/blocks`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of blocks | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/events`

`GET /v1/properties/&#123;property_id&#125;/events`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of events | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/frontdesk`

`GET /v1/properties/&#123;property_id&#125;/in-house`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of in-house guests | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/housekeeping`

`GET /v1/properties/&#123;property_id&#125;/housekeeping`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of housekeeping tasks | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/rates`

`GET /v1/properties/&#123;property_id&#125;/rate-plans`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of rate plans | `RatePlan`[] |
| 403 | Missing `pms:admin` scope | - |

### `POST /v1/admin/rates`

`POST /v1/properties/&#123;property_id&#125;/rate-plans`

Gate: `pms:admin`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_policy` | string,null | no |  |
| `currency_code` | string | yes |  |
| `deposit_policy` | string,null | no |  |
| `description` | string,null | no |  |
| `guarantee_policy` | string,null | no |  |
| `is_active` | boolean,null | no |  |
| `is_negotiated` | boolean,null | no |  |
| `market_code` | string,null | no |  |
| `max_advance_booking` | integer,null | no |  |
| `max_los` | integer,null | no |  |
| `min_advance_booking` | integer,null | no |  |
| `min_los` | integer,null | no |  |
| `rate_category` | string,null | no |  |
| `rate_class` | string,null | no |  |
| `rate_plan_code` | string | yes |  |
| `rate_plan_name` | string | yes |  |
| `source_code` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rate plan created | `RatePlan` |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/reports`

`GET /v1/properties/&#123;property_id&#125;/reports/occupancy`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Occupancy report | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/reservations`

`GET /v1/properties/&#123;property_id&#125;/reservations`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of reservations | - |
| 403 | Missing `pms:admin` scope | - |

### `POST /v1/admin/reservations`

`POST /v1/properties/&#123;property_id&#125;/reservations`

Gate: `pms:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Reservation created | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/admin/reservations/{id}`

`GET /v1/properties/&#123;property_id&#125;/reservations/&#123;res_id&#125;`

Gate: `pms:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Reservation | - |
| 403 | Missing `pms:admin` scope | - |
| 404 | Reservation not found | - |

