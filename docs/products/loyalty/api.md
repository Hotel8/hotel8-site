---
title: "Hotel8:Loyalty - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Hotel8/hotel8-loyalty/edit/main/docs/openapi.json
---
Sentin8 Hotel8:Loyalty - Loyalty Program service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**4 endpoints**.

## loyalty

### `GET /v1/admin/members`

`GET /v1/admin/programs/{program_id}/members`

Gate: `loyalty:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of members | - |
| 403 | Missing loyalty:admin scope | - |

### `POST /v1/admin/members`

`POST /v1/members`

Gate: `loyalty:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Member created | - |
| 403 | Missing loyalty:admin scope | - |

### `GET /v1/admin/members/{id}`

`GET /v1/members/{member_id}`

Gate: `loyalty:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Member details | - |
| 403 | Missing loyalty:admin scope | - |
| 404 | Member not found | - |

### `GET /v1/admin/points`

`GET /v1/members/{member_id}/transactions`

Gate: `loyalty:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `member_id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Point transaction history | - |
| 403 | Missing loyalty:admin scope | - |

