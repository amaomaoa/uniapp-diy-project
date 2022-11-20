<template>
    <view m-2 flex :class="type == 1 ? '' : 'flex-row-reverse'" mt-5>
        <image
            :src="avatar"
            :class="type == 1 ? 'left-avatar' : 'right-avatar'"
        ></image>
        <view center :class="type == 1 ? 'left-card' : 'right-card'">
            {{ msg }}</view
        >
        <view flex-1></view>
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
    avatar: string;
}>();
</script>

<style scoped>
.left-card {
    position: relative;
    border-radius: 15rpx;
    background: #00bfb6;
    color: #fff;
    padding: 15rpx;
    max-width: 350rpx;
    line-height: 1.5;
    letter-spacing: 2px;
}
.left-card::before {
    content: "";
    display: inline-block;
    border: solid 30rpx transparent;
    border-right-color: #00bfb6;
    position: absolute;
    top: 20rpx;
    left: -55rpx;
}
.left-avatar {
    width: 100rpx;
    height: 100rpx;
    margin-right: 30rpx;
}

.right-avatar {
    width: 100rpx;
    height: 100rpx;
    margin-left: 30rpx;
}
.right-card {
    position: relative;
    border-radius: 15rpx;
    background: #00bfb6;
    color: #fff;
    padding: 15rpx;
    max-width: 300rpx;
    line-height: 1.5;
    letter-spacing: 2px;
}

.right-card::after {
    content: "";
    display: inline-block;
    border: solid 30rpx transparent;
    border-left-color: #00bfb6;
    top: 20rpx;
    right: -55rpx;
    position: absolute;
}
</style>
