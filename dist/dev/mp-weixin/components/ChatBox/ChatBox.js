"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MessageCard();
}
const MessageCard = () => "../MessageCard/MessageCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ChatBox",
  props: {
    msgs: { type: Array, required: true }
  },
  emits: ["addToMyConfigs"],
  setup(__props, { expose, emit }) {
    const scrollTop = common_vendor.ref();
    function gotoButtom() {
      scrollTop.value = 999999;
      setTimeout(() => {
        scrollTop.value = 999999 + 100;
      }, 10);
    }
    function addToMyConfigs(configs) {
      emit("addToMyConfigs", configs);
    }
    expose({
      gotoButtom
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.msgs, (m, item, i0) => {
          return {
            a: item,
            b: common_vendor.o(addToMyConfigs, item),
            c: "5ce26c22-0-" + i0,
            d: common_vendor.p({
              msg: m.msg,
              color: m.color,
              type: m.type,
              avatar: m.avatar,
              configs: m.configs
            })
          };
        }),
        b: scrollTop.value
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/components/ChatBox/ChatBox.vue"]]);
wx.createComponent(Component);
