"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (ChatBox + MessageInput)();
}
const MessageInput = () => "../../components/MessageInput/MessageInput.js";
const ChatBox = () => "../../components/ChatBox/ChatBox.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["flex-1"]: true,
          ["overflow-auto"]: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
