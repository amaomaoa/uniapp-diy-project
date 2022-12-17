"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MessageInput",
  props: {
    free: { type: Boolean, required: true }
  },
  emits: ["send"],
  setup(__props, { emit: emits }) {
    const porps = __props;
    const msg = common_vendor.ref("");
    function send() {
      if (msg.value && porps.free) {
        emits("send", msg.value);
        msg.value = "";
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(send),
        b: msg.value,
        c: common_vendor.o(($event) => msg.value = $event.detail.value),
        d: !__props.free,
        e: !__props.free,
        f: common_vendor.o(send),
        g: common_vendor.n(__props.free ? "i-carbon-send-alt-filled" : "")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/components/MessageInput/MessageInput.vue"]]);
wx.createComponent(Component);
