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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/policy-check-relation",
          label: "policy_check_relation",
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
          label: "adjust_points",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/health",
          label: "health",
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
          label: "link_to_guest_profile",
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
          label: "get_member_rewards",
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
          label: "award_points",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/trigger-points-calculation",
          label: "trigger_points_calculation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/redeem-points",
          label: "redeem_points",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-programs",
          label: "list_programs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/create-program",
          label: "create_program",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-rewards",
          label: "list_rewards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/create-reward",
          label: "create_reward",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/update-reward",
          label: "update_reward",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/loyalty/delete-reward",
          label: "delete_reward",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/loyalty/redeem-reward",
          label: "redeem_reward",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/list-tiers",
          label: "list_tiers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/loyalty/configure-tier",
          label: "configure_tier",
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
          label: "get_admin_ui",
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
          label: "expire_points",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/loyalty/review-tiers",
          label: "review_tiers",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
