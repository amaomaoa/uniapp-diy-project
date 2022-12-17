"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MessageCard",
  props: {
    msg: { type: String, required: true },
    type: { type: Number, required: true },
    color: { type: String, required: true },
    avatar: { type: String, required: true },
    configs: { type: null, required: false }
  },
  emits: ["addToMyConfigs"],
  setup(__props, { emit }) {
    const props = __props;
    function addToMyConfigs() {
      if (props.configs) {
        emit("addToMyConfigs", props.configs);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: __props.avatar,
        b: common_vendor.n(__props.type == 1 ? "left-avatar" : "right-avatar"),
        c: common_vendor.t(__props.msg),
        d: common_vendor.n(__props.type == 1 ? "left-card" : "right-card"),
        e: common_vendor.o(addToMyConfigs),
        f: common_vendor.n(__props.type == 1 ? "" : "flex-row-reverse")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a298bbf1"], ["__file", "/home/bash/i/uniapp-diy-project/src/components/MessageCard/MessageCard.vue"]]);
wx.createComponent(Component);
