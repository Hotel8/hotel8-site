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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/policy-check-relation",
          label: "policy_check_relation",
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
          label: "configure_channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/list-channels",
          label: "list_channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/create-channel",
          label: "create_channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/update-channel",
          label: "update_channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/meta/delete-channel",
          label: "delete_channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/meta/list-channel-configs",
          label: "list_channel_configs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/push-content",
          label: "push_content",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/encrypt-credentials",
          label: "encrypt_credentials",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/sync-ari",
          label: "sync_ari",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/verify-rate-accuracy",
          label: "verify_rate_accuracy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/meta/health",
          label: "health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/get-rate-limits",
          label: "get_rate_limits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/generate-utm",
          label: "generate_utm",
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
          label: "get_analytics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/meta/get-admin-ui",
          label: "get_admin_ui",
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
          label: "full_sync",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
