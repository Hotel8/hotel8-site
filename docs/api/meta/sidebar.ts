import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/meta/hotel-8-meta",
      },
      items: [
        {
          type: "doc",
          id: "api/meta/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      link: {
        type: "doc",
        id: "api/meta/hotel-8-meta",
      },
      items: [
        {
          type: "doc",
          id: "api/meta/configure-channel",
          label: "`POST /v1/channel-configs`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/list-channels",
          label: "`GET /v1/channels`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/create-channel",
          label: "`POST /v1/channels`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/update-channel",
          label: "`PUT /v1/channels/{channel_id}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/delete-channel",
          label: "`DELETE /v1/channels/{channel_id}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/list-channel-configs",
          label: "`GET /v1/channels/{channel_id}/configs`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/push-content",
          label: "`POST /v1/channels/{channel_id}/content`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/encrypt-credentials",
          label: "`POST /v1/channels/{channel_id}/credentials`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/sync-ari",
          label: "`POST /v1/channels/{channel_id}/sync`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/verify-rate-accuracy",
          label: "`POST /v1/channels/{channel_id}/verify`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/get-rate-limits",
          label: "`GET /v1/rate-limits`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/generate-utm",
          label: "`POST /v1/utm/generate`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "meta-admin",
      items: [
        {
          type: "doc",
          id: "api/meta/get-analytics",
          label: "`GET /v1/admin/properties/{property_id}/analytics`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "meta-cron",
      items: [
        {
          type: "doc",
          id: "api/meta/full-sync",
          label: "`POST /v1/cron/full-sync`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
