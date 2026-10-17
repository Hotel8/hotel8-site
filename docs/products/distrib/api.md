---
title: "Hotel8:Distrib - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Hotel8/hotel8-distrib/edit/main/docs/openapi.json
---
Sentin8 Hotel8:Distrib - Distribution service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**3 endpoints**.

## distrib

### `GET /v1/admin/availability`

`GET /v1/channels/&#123;channel_code&#125;/properties/&#123;property_code&#125;/ari`

Gate: `distrib:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Channel availability (ARI) | - |
| 403 | Missing `distrib:admin` scope | - |

### `GET /v1/admin/channels`

`GET /v1/channels`

Gate: `distrib:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of channels | - |
| 403 | Missing `distrib:admin` scope | - |

### `POST /v1/admin/channels`

`POST /v1/channels`

Gate: `distrib:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Channel created | - |
| 403 | Missing `distrib:admin` scope | - |

