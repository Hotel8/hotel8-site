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

**162 endpoints** across 4 groups.

## policy

### `GET /v1/admin/attributes`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Principal attributes of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/attributes`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute stored | - |
| 400 | Invalid attribute definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/attributes`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy sets of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/disable`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets disabled | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/enforce`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to enforce mode | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/shadow`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to shadow mode | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The policy set | - |
| 403 | Caller lacks the admin scope | - |
| 404 | Unknown policy set name | - |

### `PUT /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set stored | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/test`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dry-run decision trace | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | ReBAC relations of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/relations`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation stored | - |
| 400 | Invalid relation definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/relations`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations/check`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subject` | query | yes | string |
| `relation` | query | yes | string |
| `object` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The check verdict | - |
| 403 | Caller lacks the admin scope | - |


## pms-admin

### `GET /v1/admin/ui/{page}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/admin/{property_id}/{resource}`

`GET /v1/admin/&#123;resource&#125;` - admin data for the RFW tables. Each resource maps to its Shield `read` action; unknown resources 404.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/admin/{property_id}/{resource}`

`POST /v1/admin/&#123;resource&#125;` - form-submit aliases. The RFW renderer only POSTs; each alias calls the SAME public domain handler (shared business rules), so the admin surface can create/update/delete exactly what staff can.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/companies/{profile_id}/admin-provisioning`

`GET .../companies/&#123;profile_id&#125;/admin-provisioning` - whether the company still needs its first corporate admin provisioned (no IdP + no bound ADMIN user). The corporate login page reads this after company-code verification to decide between the normal login and the provisioning flow.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/companies/{profile_id}/admin-provisioning`

`PUT .../companies/&#123;profile_id&#125;/admin-provisioning` - provision the first corporate admin: binds the traveler (created on the fly when needed) as `ADMIN` and stamps `preferences.provisioned_admin_at`. Idempotent - re-provisioning an already-admin company is a no-op returning the existing state with `already_provisioned: true`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |


## pms

### `GET /v1/async/result/{job_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/async/status/{job_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/availability`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/health`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/async`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/async/cashiering`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/async/crm`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/async/inventory`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/async/par`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/audit-log`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/availability`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/blocks`

`GET /v1/properties/&#123;property_id&#125;/blocks`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of blocks | - |
| 403 | Missing `pms:admin` scope | - |

### `POST /v1/properties/{property_id}/blocks`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/blocks/{block_id}/next-statuses`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/blocks/{block_id}/posting-master`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/blocks/{block_id}/status`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/companies/by-traveler/{profile_id}`

`GET /v1/properties/&#123;property_id&#125;/companies/by-traveler/&#123;profile_id&#125;` - the companies a traveler is bound to (multi-company session switcher).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/companies/{profile_id}/payment-methods`

`GET /v1/properties/&#123;property_id&#125;/companies/&#123;profile_id&#125;/payment-methods` - credit-approved methods for a company profile. Checkout surfaces the `POSTPAY`/`BILL_TO_COMPANY` rows; everything else is bookkeeping.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/companies/{profile_id}/payment-methods`

`POST .../companies/&#123;profile_id&#125;/payment-methods` - hotel sales registers a method or approves a pending one (admin surface).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/companies/{profile_id}/users`

`GET .../companies/&#123;profile_id&#125;/users` - the company's traveler roster.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/companies/{profile_id}/users`

`POST .../companies/&#123;profile_id&#125;/users` - bind a traveler to the company.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/config`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/corporate-availability`

`POST /v1/properties/&#123;property_id&#125;/corporate-availability` - availability for a corporate session (company_profile_id). Rate-mix policy: when the request carries a company context, ONLY the negotiated rate plans linked to that company (via `preferences.negotiated_rate_plan_ids`) are returned; public plans are withheld so negotiated rates never leak to non-members and members never book public rates against their contract. Companies with no linked plans get an explicit empty result, not a public fallback.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/digital-keys`

List digital keys for a reservation.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/digital-keys`

Issue digital keys for a checked-in reservation (idempotent by room + count).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/digital-keys/{key_id}/activate`

Activate a digital key.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/digital-keys/{key_id}/deactivate`

Deactivate (revoke) a digital key.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/end-of-day`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/end-of-day/exceptions`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/end-of-day/{eod_id}/retry`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/events`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/events`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/events/{event_id}/resources`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/events/{event_id}/resources`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/external-systems`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/external-systems`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/feedback`

Read stay feedback for a reservation.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/feedback`

Submit (or update) stay feedback - one row per reservation.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/flow/workflows`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/folios`

Open folio for the in-house stay in a room - the kiosk/eGuest check-out view over the same folio rows the per-reservation route returns.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/func/invoke`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/function-spaces`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/guarantee-policies`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/housekeeping`

`GET /v1/properties/&#123;property_id&#125;/housekeeping`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of housekeeping tasks | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/properties/{property_id}/housekeeping/forecast`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/housekeeping/tasks`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/housekeeping/tasks`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/housekeeping/tasks/{task_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/housekeeping/{room_number}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/images`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/in-house`

`GET /v1/properties/&#123;property_id&#125;/in-house`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of in-house guests | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/properties/{property_id}/inventory`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/inventory/sell-limits`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/items`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/items`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/items/{item_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/items/{item_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/kiosk-config`

`GET .../kiosk-config` - the terminal's mode menu source of truth (eKiosk bootstrap read). Defaults are materialized on first read so the terminal always gets a row.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/kiosk-config`

`PUT .../kiosk-config` - admin RFW settings mutation (``hotel8:pms:admin``).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/lov`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/lov`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/lov/{lov_type}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/modules`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/modules`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/negotiated-rate-plans`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/negotiated-rate-plans/{rate_plan_id}/link-company`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/notifications`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/packages`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/packages`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/payment-methods`

`GET /v1/properties/&#123;p&#125;/payment-methods` - the signed-in guest's saved payment methods, resolved by the session subject (holder-scoped). Rows carry bill8 token references only - never PAN or token secrets (DESIGN.md §3 secret-reference rule).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/payment-methods`

`POST /v1/properties/&#123;p&#125;/payment-methods` - save a tokenized method (bill8 already holds the instrument; PMS stores the reference).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/payment-methods/{method_id}`

`DELETE /v1/properties/&#123;p&#125;/payment-methods/&#123;method_id&#125;` - remove a saved method (holder-scoped: only the owner's rows are deletable).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/pci-compliance`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/post/emails`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/profiles`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/profiles`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/profiles/merge`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/profiles/{profile_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/profiles/{profile_id}/loyalty`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/profiles/{profile_id}/loyalty-number`

`PUT /v1/properties/&#123;property_id&#125;/profiles/&#123;profile_id&#125;/loyalty-number` Sets the loyalty member number on a guest profile. Called by Hotel8:Loyalty via `pms-client` over its HTTP API (DESIGN.md §1 - no cross-service SQL).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/profiles/{profile_id}/preferences`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/profiles/{profile_id}/preferences`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/profiles/{profile_id}/preferences/{pref_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/profiles/{profile_id}/stay-history`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/promo/validate`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/rate-limits`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/rate-plans`

`GET /v1/properties/&#123;property_id&#125;/rate-plans`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of rate plans | `RatePlan`[] |
| 403 | Missing `pms:admin` scope | - |

### `POST /v1/properties/{property_id}/rate-plans`

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

### `GET /v1/properties/{property_id}/rate-plans/{plan_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/rate-plans/{plan_id}/schedules`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/rate-plans/{plan_id}/schedules`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/rate-plans/{plan_id}/schedules/{schedule_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/channel-performance`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/guest-history`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/housekeeping-analysis`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/market-segment`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/occupancy`

`GET /v1/properties/&#123;property_id&#125;/reports/occupancy`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Occupancy report | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/properties/{property_id}/reports/rate-analysis`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/reservation-summary`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/revenue`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reports/sales-catering`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations`

`GET /v1/properties/&#123;property_id&#125;/reservations`

Gate: `pms:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of reservations | - |
| 403 | Missing `pms:admin` scope | - |

### `POST /v1/properties/{property_id}/reservations`

`POST /v1/properties/&#123;property_id&#125;/reservations`

Gate: `pms:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Reservation created | - |
| 403 | Missing `pms:admin` scope | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}`

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

### `PUT /v1/properties/{property_id}/reservations/{res_id}`

`PUT /v1/properties/&#123;property_id&#125;/reservations/&#123;res_id&#125;` - pre-arrival edit.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}/boarding-pass`

Boarding pass - the check-in artifact the kiosk completion step renders (room, dates, guest, key count). Computed from live rows, never stored.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/cancel`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/charges`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/charges/dispute`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/check-in`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/reservations/{res_id}/check-in`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/check-out`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}/folio`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/folio/generate`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}/instructions`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/ledger-post`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/link-guest`

`POST /v1/properties/&#123;p&#125;/reservations/&#123;res_id&#125;/link-guest` - bind the signed-in session's guest profile to a booking made anonymously in eBooking.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}/messages`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/messages`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/payments`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/payments-process`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/pre-check-in`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/reservations/{res_id}/service-requests`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/service-requests`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/split`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/reservations/{res_id}/upsell`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/room-types`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/room-types`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `DELETE /v1/properties/{property_id}/room-types/{type_id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/rooms`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/rooms`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `PUT /v1/properties/{property_id}/rooms/{room_number}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `GET /v1/properties/{property_id}/transaction-codes`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/vouchers/redeem`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/vouchers/validate`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

### `POST /v1/properties/{property_id}/walk-in`

`POST /v1/properties/&#123;property_id&#125;/walk-in` - kiosk express booking.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |


## pms-graphql

### `POST /v1/graphql`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Forbidden | - |

