"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MessageInput",
  emits: ["send"],
  setup(__props, { emit: emits }) {
    const msg = common_vendor.ref("");
    function send() {
      emits("send", msg.value);
    }
    return (_ctx, _cache) => {
      return {
        a: msg.value,
        b: common_vendor.o(($event) => msg.value = $event.detail.value),
        c: common_vendor.o(send)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/components/MessageInput/MessageInput.vue"]]);
wx.createComponent(Component);
