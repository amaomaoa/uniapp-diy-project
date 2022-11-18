"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "getConfig",
  setup(__props) {
    const avatarUrl = common_vendor.ref(
      "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
    );
    const nickname = common_vendor.ref("");
    function onChooseAvatar(e) {
      avatarUrl.valueOf = e.detail.avatarUrl;
    }
    return (_ctx, _cache) => {
      return {
        a: avatarUrl.value,
        b: common_vendor.o(onChooseAvatar),
        c: nickname.value,
        d: common_vendor.o(($event) => nickname.value = $event.detail.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/subpages/me/getConfig.vue"]]);
wx.createPage(MiniProgramPage);
