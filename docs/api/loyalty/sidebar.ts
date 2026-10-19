import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/loyalty/hotel-8-loyalty",
      },
      items: [
        {
          type: "doc",
          id: "api/loyalty/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "loyalty",
      link: {
        type: "doc",
        id: "api/loyalty/hotel-8-loyalty",
      },
      items: [
        {
          type: "doc",
          id: "api/loyalty/search-members",
          label: "`GET /v1/admin/programs/{program_id}/members`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/adjust-points",
          label: "`POST /v1/admin/programs/{program_id}/members/{member_id}/adjust`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/create-member",
          label: "`POST /v1/members`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/link-to-guest-profile",
          label: "`POST /v1/members/link-guest`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/get-member",
          label: "`GET /v1/members/{member_id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/get-member-rewards",
          label: "`GET /v1/members/{member_id}/rewards`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/get-member-transactions",
          label: "`GET /v1/members/{member_id}/transactions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/award-points",
          label: "`POST /v1/points/award`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/trigger-points-calculation",
          label: "`POST /v1/points/calculate`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/redeem-points",
          label: "`POST /v1/points/redeem`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-programs",
          label: "`GET /v1/programs`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/create-program",
          label: "`POST /v1/programs`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-rewards",
          label: "`GET /v1/programs/{program_id}/rewards`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/create-reward",
          label: "`POST /v1/programs/{program_id}/rewards`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/update-reward",
          label: "`PUT /v1/programs/{program_id}/rewards/{reward_id}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/delete-reward",
          label: "`DELETE /v1/programs/{program_id}/rewards/{reward_id}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/redeem-reward",
          label: "`POST /v1/rewards/redeem`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-tiers",
          label: "`GET /v1/tiers`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/configure-tier",
          label: "`POST /v1/tiers`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "loyalty-admin",
      items: [
        {
          type: "doc",
          id: "api/loyalty/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "loyalty-cron",
      items: [
        {
          type: "doc",
          id: "api/loyalty/expire-points",
          label: "`POST /v1/cron/expire-points`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/review-tiers",
          label: "`POST /v1/cron/review-tiers`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
