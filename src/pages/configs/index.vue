<template>
    <view>
        <u-swipe-action>
            <view m-3 v-for="i in userConfigs" :key="i.id">
                <u-swipe-action-item
                    :options="options"
                    @click.stop="remove(i.id!)"
                >
                    <ConfigCard @modify="modifyConfig(i)" :configs="i" />
                </u-swipe-action-item>
            </view>
            <view fixed bottom-60 right-40 z-9999 @click.stop="addConfigs">
                <u-icon name="plus-circle" color="#008000" size="60"></u-icon>
            </view>
        </u-swipe-action>
    </view>
</template>
<script setup lang="ts">
import ConfigCard from "~/components/ConfigCard/ConfigCard.vue";
import { onShow } from "@dcloudio/uni-app";
import { getCurrentInstance, ref } from "vue";
import { deleteConfig, getUserConfigs } from "~/api/configs";
const userConfigs = ref<Configs[]>();
const instance = getCurrentInstance();

const show = ref(true);

function getUserConfig() {
    userConfigs.value = [];
    getUserConfigs().then((res) => {
        userConfigs.value = res.data;
    });
}

function addConfigs() {
    uni.navigateTo({
        url: "/subpages/configs/addConfig",
    });
}

function modifyConfig(configs: Configs) {
    uni.navigateTo({
        url: `/subpages/configs/addConfig?configs=${JSON.stringify(configs)}`,
    });
}
const options = ref([
    {
        text: "删除",
        style: {
            backgroundColor: "#f56c6c",
        },
    },
]);

function remove(id: number | string) {
    deleteConfig(id).then((res) => {
        getUserConfig();
    });
}

onShow(() => {
    getUserConfig();
});
</script>
