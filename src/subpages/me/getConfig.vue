<template>
    <view>
        <button
            open-type="chooseAvatar"
            @chooseavatar="onChooseAvatar"
            w-120
            h-120
            p-0
            mt-20rpx
            mb-20rpx
        >
            <image :src="avatarUrl" w-120 h-120></image>
        </button>
        <input
            type="nickname"
            v-model="nickname"
            placeholder="请输入昵称"
            ml-20rpx
        />
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const avatarUrl = ref(
    "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
);

const nickname = ref("");

function onChooseAvatar(e: any) {
    avatarUrl.valueOf = e.detail.avatarUrl;
}
</script>
