"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const api_configs = require("../../api/configs.js");
const store_config = require("../../store/config.js");
require("../../api/user.js");
require("../../api/index.js");
require("../../api/config.js");
if (!Math) {
  (ChatBox + MessageInput)();
}
const MessageInput = () => "../../components/MessageInput/MessageInput.js";
const ChatBox = () => "../../components/ChatBox/ChatBox.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const useStore = store_user.useUsersStore();
    const useConfig = store_config.useConfigStore();
    const { user } = common_vendor.storeToRefs(useStore);
    const { configMap } = common_vendor.storeToRefs(useConfig);
    const msgs = common_vendor.ref([]);
    const free = common_vendor.ref(true);
    const configsKey = {
      CPU: "cpuId",
      \u4E3B\u677F: "motherboardId",
      \u663E\u5361: "graphicsCardId",
      \u5185\u5B58: "memoryId",
      \u786C\u76D8: "storeId",
      \u7535\u6E90: "powerId",
      \u673A\u7BB1: "chassisId"
    };
    const chatbox = common_vendor.ref(null);
    function send(msg) {
      addMsg(getCharMsg(msg, 2));
      goRecommend(msg);
    }
    function goRecommend(msg) {
      free.value = false;
      api_configs.recommendConfigs(msg).then((res) => {
        const msg2 = buildMsg(res.data);
        addMsg(getCharMsg(msg2, 1, res.data.diyAccessoriesList));
      }).finally(() => {
        free.value = true;
      });
    }
    function getCharMsg(msg, type, configs) {
      const avatar = type === 1 ? "https://ljw111.oss-cn-guangzhou.aliyuncs.com/2022/12/17/131618a3f1184a15aec1bbd3afa6e358.png" : user.value.avatar;
      return {
        msg,
        type,
        color: "#008000",
        avatar,
        configs
      };
    }
    function buildMsg(r) {
      if (!r.label || r.label.length == 0 || !r.label[0]) {
        return "\u5F88\u62B1\u6B49\uFF0C\u6CA1\u6709\u529E\u6CD5\u4E86\u89E3\u5230\u60A8\u7684\u9700\u6C42\uFF0C\u6B63\u5728\u52AA\u529B\u5B66\u4E60\u4E2D";
      }
      let text = `\u4F60\u53EF\u80FD\u6709"${r.label.join()}"\u7684\u9700\u6C42`;
      if (!r.diyAccessoriesList) {
        text = `${text},\u4F46\u662F\u7CFB\u7EDF\u8FD8\u6CA1\u6709\u76F8\u5E94\u9700\u6C42\u7684\u914D\u7F6E\u5355
`;
        return text;
      }
      text = `${text},\u4E0B\u9762\u662F\u7CFB\u7EDF\u4E3A\u4F60\u63A8\u8350\u7684\u914D\u7F6E\u5355\r

`;
      for (const i in configsKey) {
        const id = r.diyAccessoriesList[configsKey[i]];
        if (id != void 0) {
          text = `${text}${i} : ${configMap.value[id].name}\r
`;
        }
      }
      if (r.diyAccessoriesList["price"]) {
        text = `${text}\u4EF7\u683C : ${r.diyAccessoriesList["price"]}
`;
      }
      if (r.diyAccessoriesList["remark"]) {
        text = `${text}\u5907\u6CE8 : ${r.diyAccessoriesList["remark"]}
`;
      }
      return text;
    }
    function addMsg(chatmsg) {
      msgs.value.push(chatmsg);
      if (chatbox.value) {
        chatbox.value.gotoButtom();
      }
    }
    function addToMyConfigs(configs) {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u6DFB\u52A0\u8BE5\u914D\u7F6E\u5355\u5230\u6211\u7684\u914D\u7F6E\u5355",
        success: function(res) {
          if (res.confirm) {
            configs.id = void 0;
            api_configs.addorupdateUserConfigs(configs).then((res2) => {
              common_vendor.index.$u.toast("\u6DFB\u52A0\u6210\u529F");
            });
          }
        }
      });
    }
    common_vendor.onMounted(() => {
      addMsg(getCharMsg(`\u6B22\u8FCE\u6765\u5230\u672C\u7A0B\u5E8F,\u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u63D0\u51FA\u4F60\u7684\u7535\u8111\u9700\u6C42`, 1));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(chatbox, "6f64fe76-0", {
          "k": "chatbox"
        }),
        b: common_vendor.o(addToMyConfigs),
        c: common_vendor.p({
          msgs: msgs.value,
          ["flex-1"]: true,
          ["overflow-auto"]: true
        }),
        d: common_vendor.o(send),
        e: common_vendor.p({
          free: free.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/bash/i/uniapp-diy-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
