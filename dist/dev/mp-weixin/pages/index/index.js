"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function goto() {
      common_vendor.index.navigateTo({
        url: "/subpages/me/getConfig"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goto)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
