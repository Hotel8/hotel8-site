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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/policy-check-relation",
          label: "policy_check_relation",
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
          label: "map_channel_property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/set-property-controls",
          label: "set_property_controls",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/set-rate-markup",
          label: "set_rate_markup",
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
          label: "get_channel_properties",
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
          label: "get_channel_property_content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/get-channel-controls",
          label: "get_channel_controls",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/receive-reservation",
          label: "receive_reservation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/update-channel-reservation",
          label: "update_channel_reservation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/push-reservation-status",
          label: "push_reservation_status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/validate-channel-credentials",
          label: "validate_channel_credentials",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/update-channel",
          label: "update_channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/distrib/delete-channel",
          label: "delete_channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/distrib/push-ari",
          label: "push_ari",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/push-content",
          label: "push_content",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/push-controls",
          label: "push_controls",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/list-channel-properties",
          label: "list_channel_properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/health",
          label: "health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/map-rate-plan",
          label: "map_rate_plan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/map-room-type",
          label: "map_room_type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/distrib/get-sync-log",
          label: "get_sync_log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/distrib/retry-failed-syncs",
          label: "retry_failed_syncs",
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
          label: "get_admin_ui",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
