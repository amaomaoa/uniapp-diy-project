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
          msg: `
            \u6CE8\u610F\u70B9\uFF1A1. scroll-view\u8981\u6709\u660E\u786E\u7684\u9AD8\u5EA6
2. bottomId\u548C\u8981\u6EDA\u52A8\u5230\u7684\u7EC4\u4EF6\u7684id\u8981\u4E00\u81F4\uFF0C\u4E14\u662F\u53D8\u5316\u7684
3. \u4F7F\u7528setTimeout\u65B9\u6CD5\u6765\u5EF6\u8FDF\u66F4\u6539\u53D8\u91CF
` + values.value.toString(),
          type: values.value % 2 == 0 ? 1 : 2,
          color: "red",
          avatar: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
        });
      }
      setTimeout(() => {
        refresher.value = false;
      }, 10);
    }
    function gotoButtom() {
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
              type: m.type,
              avatar: m.avatar
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
