<template>
    <view flex flex-col h-100%>
        <ChatBox
            @addToMyConfigs="addToMyConfigs"
            :msgs="msgs"
            flex-1
            overflow-auto
            ref="chatbox"
        />
        <MessageInput @send="send" :free="free" />
    </view>
</template>

<script setup lang="ts">
import MessageInput from "@/components/MessageInput/MessageInput.vue";
import ChatBox from "@/components/ChatBox/ChatBox.vue";
import { onMounted, ref } from "vue";
import { useUsersStore } from "~/store/user";
import { storeToRefs } from "pinia";
import { addorupdateUserConfigs, recommendConfigs } from "~/api/configs";
import { useConfigStore } from "~/store/config";

const useStore = useUsersStore();
const useConfig = useConfigStore();
const { user } = storeToRefs(useStore);
const { configMap } = storeToRefs(useConfig);

const msgs = ref<ChatMsg[]>([]);
const free = ref(true);
const configsKey: { [key: string]: keyof Configs } = {
    CPU: "cpuId",
    主板: "motherboardId",
    显卡: "graphicsCardId",
    内存: "memoryId",
    硬盘: "storeId",
    电源: "powerId",
    机箱: "chassisId",
};
const chatbox = ref<InstanceType<typeof ChatBox> | null>(null);

function send(msg: string) {
    addMsg(getCharMsg(msg, 2));
    goRecommend(msg);
}

function goRecommend(msg: string) {
    free.value = false;
    recommendConfigs(msg)
        .then((res) => {
            const msg2 = buildMsg(res.data);
            addMsg(getCharMsg(msg2, 1, res.data.diyAccessoriesList));
        })
        .finally(() => {
            free.value = true;
        });
}

function getCharMsg(msg: string, type: 1 | 2, configs?: Configs): ChatMsg {
    const avatar =
        type === 1
            ? "https://ljw111.oss-cn-guangzhou.aliyuncs.com/2022/12/17/131618a3f1184a15aec1bbd3afa6e358.png"
            : user.value.avatar;
    return {
        msg: msg,
        type: type,
        color: "#008000",
        avatar: avatar,
        configs: configs,
    };
}

function buildMsg(r: RecommendVo) {
    if (!r.label || r.label.length == 0 || !r.label[0]) {
        return "很抱歉，没有办法了解到您的需求，正在努力学习中";
    }
    let text = `你可能有"${r.label.join()}"的需求`;
    if (!r.diyAccessoriesList) {
        text = `${text},但是系统还没有相应需求的配置单\n`;
        return text;
    }
    text = `${text},下面是系统为你推荐的配置单\r\n\n`;
    for (const i in configsKey) {
        const id = r.diyAccessoriesList[configsKey[i]];
        if (id != undefined) {
            text = `${text}${i} : ${configMap.value[id].name}\r\n`;
        }
    }
    if (r.diyAccessoriesList["price"]) {
        text = `${text}价格 : ${r.diyAccessoriesList["price"]}\n`;
    }
    if (r.diyAccessoriesList["remark"]) {
        text = `${text}备注 : ${r.diyAccessoriesList["remark"]}\n`;
    }
    return text;
}

function addMsg(chatmsg: ChatMsg) {
    msgs.value.push(chatmsg);
    if (chatbox.value) {
        chatbox.value.gotoButtom();
    }
}

function addToMyConfigs(configs: Configs) {
    uni.showModal({
        title: "提示",
        content: "添加该配置单到我的配置单",
        success: function (res) {
            if (res.confirm) {
                configs.id = undefined;
                addorupdateUserConfigs(configs).then((res) => {
                    uni.$u.toast("添加成功");
                });
            }
        },
    });
}

const fun = () => {
    let i = 0;
    return () => {
        addMsg(
            getCharMsg(
                "欢迎来到本程序,你可以在此处提出你的电脑需求欢迎来到本程序,你可以在此处提出你的电脑需求欢迎来到本程序,你可以在此处提出你的电脑需求欢迎来到本程序,你可以在此处提出你的电脑需求欢迎来到本程序,你可以在此处提出你的电脑需求欢迎来到本程序,你可以在此处提出你的电脑需求",
                i % 2 == 0 ? 1 : 2
            )
        );
        i++;
    };
};
const go = fun();

onMounted(() => {
    addMsg(getCharMsg(`欢迎来到本程序,你可以在此处提出你的电脑需求`, 1));
});
</script>
