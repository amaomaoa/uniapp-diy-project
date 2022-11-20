"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MessageCard();
}
const MessageCard = () => "../MessageCard/MessageCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ChatBox",
  setup(__props, { expose }) {
    const refresher = common_vendor.ref(false);
    const scrollTop = common_vendor.ref();
    const msg = common_vendor.ref(
      new Array()
    );
    const values = common_vendor.ref(100);
    common_vendor.onMounted(() => {
      addmsg();
      gotoButtom();
    });
    function addmsg() {
      refresher.value = true;
      let arr = msg.value;
      for (let i = 0; i < 5; i++) {
        values.value--;
        arr.unshift({
          msg: values.value.toString(),
          type: 1,
          color: "red"
        });
      }
      setTimeout(() => {
        refresher.value = false;
      }, 10);
    }
    function gotoButtom() {
      console.log(" gotoButtom");
      scrollTop.value = msg.value.length * 1e3 - 1;
      setTimeout(() => {
        scrollTop.value = msg.value.length * 1e3;
      }, 10);
    }
    function dragging(e) {
    }
    expose({
      gotoButtom
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(msg.value, (m, k0, i0) => {
          return {
            a: "5ce26c22-0-" + i0,
            b: common_vendor.p({
              msg: m.msg,
              color: m.color,
              type: m.type
            })
          };
        }),
        b: refresher.value,
        c: common_vendor.o(dragging),
        d: scrollTop.value,
        e: common_vendor.o(addmsg)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/components/ChatBox/ChatBox.vue"]]);
wx.createComponent(Component);
