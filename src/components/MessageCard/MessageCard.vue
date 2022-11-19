<template>
    <view m-10>
        {{ msg }}
    </view>
</template>

<script setup lang="ts">
/**
 * @param msg 消息内容
 * @param type 消息类型
 * @param color 卡片颜色
 */
defineProps<{
    msg: string;
    type: 1 | 2;
    color: string;
}>();
</script>
