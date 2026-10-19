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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upsell/policy-check-relation",
          label: "policy_check_relation",
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
          label: "create_ab_test",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/get-ab-test-results",
          label: "get_ab_test_results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/get-analytics",
          label: "get_analytics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/list-eligibility-types",
          label: "list_eligibility_types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/health",
          label: "health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/fetch-hotel-8-pms-data",
          label: "fetch_hotel8_pms_data",
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
          label: "accept_offer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/decline-offer",
          label: "decline_offer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/expire-offers",
          label: "expire_offers",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/get-offers-for-reservation",
          label: "get_offers_for_reservation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/generate-offers",
          label: "generate_offers",
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
          label: "update_offer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/configure-offer",
          label: "configure_offer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/upsell/get-rate-limit-config",
          label: "get_rate_limit_config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/list-rules",
          label: "list_rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/upsell/create-rule",
          label: "create_rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/test-rule",
          label: "test_rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/delete-rule",
          label: "delete_rule",
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
          label: "get_admin_ui",
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
          label: "cron_daily_generation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/compute-dynamic-price",
          label: "compute_dynamic_price",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/process-upgrade-payment",
          label: "process_upgrade_payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/modify-reservation-on-acceptance",
          label: "modify_reservation_on_acceptance",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/send-acceptance-confirmation",
          label: "send_acceptance_confirmation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upsell/send-offer-notification",
          label: "send_offer_notification",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
