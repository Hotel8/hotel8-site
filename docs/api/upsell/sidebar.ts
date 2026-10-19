import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/upsell/hotel-8-upsell",
      },
      items: [
        {
          type: "doc",
          id: "api/upsell/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "upsell",
      link: {
        type: "doc",
        id: "api/upsell/hotel-8-upsell",
      },
      items: [
        {
          type: "doc",
          id: "api/upsell/create-ab-test",
          label: "`POST /v1/ab-tests`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/get-ab-test-results",
          label: "`GET /v1/ab-tests/results`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/get-analytics",
          label: "`GET /v1/analytics`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/list-eligibility-types",
          label: "`GET /v1/eligibility/types`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/fetch-hotel-8-pms-data",
          label: "`GET /v1/integration/pms`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/list-offers",
          label: "`GET /v1/offers`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/create-offer",
          label: "`POST /v1/offers`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/accept-offer",
          label: "`POST /v1/offers/accept`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/decline-offer",
          label: "`POST /v1/offers/decline`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/expire-offers",
          label: "`POST /v1/offers/expire`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/get-offers-for-reservation",
          label: "`GET /v1/offers/for-reservation`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/generate-offers",
          label: "`POST /v1/offers/generate`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/get-offer-status",
          label: "`GET /v1/offers/status`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/update-offer",
          label: "`PUT /v1/offers/{offer_id}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/configure-offer",
          label: "`PUT /v1/offers/{offer_id}/configure`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/get-rate-limit-config",
          label: "`GET /v1/rate-limits`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/list-rules",
          label: "`GET /v1/rules`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/create-rule",
          label: "`POST /v1/rules`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/test-rule",
          label: "`POST /v1/rules/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/delete-rule",
          label: "`DELETE /v1/rules/{rule_id}`",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "upsell-admin",
      items: [
        {
          type: "doc",
          id: "api/upsell/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "upsell-cron",
      items: [
        {
          type: "doc",
          id: "api/upsell/cron-daily-generation",
          label: "`POST /v1/cron/daily-generation`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/compute-dynamic-price",
          label: "`POST /v1/integration/func/dynamic-price`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/process-upgrade-payment",
          label: "`POST /v1/integration/payments/payment`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/modify-reservation-on-acceptance",
          label: "`POST /v1/integration/pms/modify-reservation`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/send-acceptance-confirmation",
          label: "`POST /v1/integration/post/confirmation`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/send-offer-notification",
          label: "`POST /v1/integration/post/notify`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
