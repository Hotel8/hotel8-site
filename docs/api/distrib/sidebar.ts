import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/distrib/hotel-8-distrib",
      },
      items: [
        {
          type: "doc",
          id: "api/distrib/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "distrib",
      link: {
        type: "doc",
        id: "api/distrib/hotel-8-distrib",
      },
      items: [
        {
          type: "doc",
          id: "api/distrib/map-channel-property",
          label: "`POST /v1/channel-properties`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/set-property-controls",
          label: "`PUT /v1/channel-properties/{channel_property_id}/controls`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/set-rate-markup",
          label: "`PUT /v1/channel-properties/{channel_property_id}/markup`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/list-channels",
          label: "`GET /v1/channels`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/create-channel",
          label: "`POST /v1/channels`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/get-channel-properties",
          label: "`GET /v1/channels/{channel_code}/properties`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/get-channel-ari",
          label: "`GET /v1/channels/{channel_code}/properties/{property_code}/ari`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/get-channel-property-content",
          label: "`GET /v1/channels/{channel_code}/properties/{property_code}/content`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/get-channel-controls",
          label: "`GET /v1/channels/{channel_code}/properties/{property_code}/controls`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/receive-reservation",
          label: "`POST /v1/channels/{channel_code}/reservations`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/update-channel-reservation",
          label: "`PUT /v1/channels/{channel_code}/reservations/{booking_id}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/push-reservation-status",
          label: "`POST /v1/channels/{channel_code}/reservations/{booking_id}/status`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/validate-channel-credentials",
          label: "`GET /v1/channels/{channel_code}/validate`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/update-channel",
          label: "`PUT /v1/channels/{channel_id}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/delete-channel",
          label: "`DELETE /v1/channels/{channel_id}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/push-ari",
          label: "`POST /v1/channels/{channel_id}/ari/push`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/push-content",
          label: "`POST /v1/channels/{channel_id}/content/push`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/push-controls",
          label: "`POST /v1/channels/{channel_id}/controls/push`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/list-channel-properties",
          label: "`GET /v1/channels/{channel_id}/mapped-properties`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/map-rate-plan",
          label: "`POST /v1/rate-plan-mappings`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/map-room-type",
          label: "`POST /v1/room-type-mappings`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/get-sync-log",
          label: "`GET /v1/sync-log`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/retry-failed-syncs",
          label: "`POST /v1/sync/retry`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "distrib-admin",
      items: [
        {
          type: "doc",
          id: "api/distrib/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
