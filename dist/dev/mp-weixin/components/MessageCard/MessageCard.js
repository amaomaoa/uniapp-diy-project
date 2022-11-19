"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MessageCard",
  props: {
    msg: { type: String, required: true },
    type: { type: Number, required: true },
    color: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.msg)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/components/MessageCard/MessageCard.vue"]]);
wx.createComponent(Component);
