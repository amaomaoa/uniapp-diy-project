<template>
    <view h-450 w-100% bg-cyan-7 center flex flex-col>
        <button
            open-type="chooseAvatar"
            @chooseavatar="onChooseAvatar"
            w-150
            h-150
            p-0
            mt-20rpx
            mb-20rpx
            b-rounded-50
        >
            <image :src="user.avatar" w-150 h-150 b-rounded-50></image>
        </button>
        <text mt-5 color-light @click="updateUsernickName">
            {{ user.nickName }}
        </text>
    </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { baseUrl, get, getToken } from "~/api";
const userMsg = defineProps<{
    user: User;
}>();
const emit = defineEmits<{
    (e: "updateUserMsg"): void;
    (e: "updateUsernickName"): void;
}>();

const show = ref(false);
function onChooseAvatar(e: any) {
    uni.uploadFile({
        url: `${baseUrl}/my/public/avatar`,
        header: {
            ...getToken(),
        },
        filePath: e.detail.avatarUrl,
        name: "avatarfile",
        success: (uploadFileRes) => {
            emit("updateUserMsg");
        },
    });
}
function updateUsernickName() {
    emit("updateUsernickName");
}
</script>
