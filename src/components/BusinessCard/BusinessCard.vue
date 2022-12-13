<template>
    <view h-450 w-100% bg-cyan-7 center flex flex-col>
        <image :src="user.avatar" w-150 h-150 b-rounded-50></image>
        <text mt-5 color-light>
            {{ user.nickName }}
        </text>
        <u-button type="primary" text="确定"></u-button>
    </view>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
const userMsg = defineProps<{
    user: User;
}>();
onMounted(() => {});
</script>
