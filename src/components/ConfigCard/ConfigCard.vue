<template>
    <view>
        <view
            @click="modify"
            bg-cyan-6
            color-white
            text-size-25rpx
            p-2
            rounded-3
        >
            <view m-1> 配件单名 :{{ configs["name"] }} </view>
            <view m-1 v-for="(item, i) in configsKey" :key="i">
                {{ title[i] }} :
                {{
                    configs[item] != undefined
                        ? configMap[configs[item]!].name
                        : "无"
                }}
            </view>
            <view m-1> 预计价格 : {{ configs["price"] }} </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useConfigStore } from "~/store/config";

const emit = defineEmits<{
    (e: "modify"): void;
}>();

const title = [
    "CPU",
    "主板",
    "显卡",
    "内存",
    "硬盘",
    "电源",
    "机箱",
    "预计价格",
];

const configsKey: Array<keyof Configs> = [
    "cpuId",
    "motherboardId",
    "graphicsCardId",
    "memoryId",
    "storeId",
    "powerId",
    "chassisId",
];

const prop = defineProps<{
    configs: Configs;
}>();

const { configs } = prop;

const { configMap } = storeToRefs(useConfigStore());

function modify() {
    emit("modify");
}

onMounted(() => {});
</script>
