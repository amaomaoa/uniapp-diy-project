<template>
    <view
        @click="addToMyConfigs"
        text-size-25
        m-2
        flex
        :class="type == 1 ? '' : 'flex-row-reverse'"
        mt-5
    >
        <image
            :src="avatar"
            :class="type == 1 ? 'left-avatar' : 'right-avatar'"
        ></image>
        <view center :class="type == 1 ? 'left-card' : 'right-card'">
            <text user-select>
                {{ msg }}
            </text>
        </view>
        <view flex-1></view>
    </view>
</template>

<script setup lang="ts">
/**
 * @param msg 消息内容
 * @param type 消息类型
 * @param color 卡片颜色
 */
const props = defineProps<{
    msg: string;
    type: 1 | 2;
    color: string;
    avatar: string;
    configs?: Configs;
}>();

const emit = defineEmits<{
    (e: "addToMyConfigs", configs: Configs): void;
}>();
function addToMyConfigs() {
    if (props.configs) {
        emit("addToMyConfigs", props.configs);
    }
}
</script>

<style scoped>
.left-card {
    position: relative;
    border-radius: 15rpx;
    background: #00bfb6;
    color: #fff;
    padding: 15rpx;
    max-width: 400rpx;
    line-height: 1.5;
    letter-spacing: 2px;
}
.left-card::before {
    content: "";
    display: inline-block;
    border: solid 20rpx transparent;
    border-right-color: #00bfb6;
    position: absolute;
    top: 15rpx;
    left: -35rpx;
}
.left-avatar {
    width: 80rpx;
    height: 80rpx;
    margin-right: 20rpx;
}

.right-avatar {
    width: 80rpx;
    height: 80rpx;
    margin-left: 20rpx;
}
.right-card {
    position: relative;
    border-radius: 15rpx;
    background: #00bfb6;
    color: #fff;
    padding: 15rpx;
    max-width: 400rpx;
    line-height: 1.5;
    letter-spacing: 2px;
}

.right-card::after {
    content: "";
    display: inline-block;
    border: solid 20rpx transparent;
    border-left-color: #00bfb6;
    top: 15rpx;
    right: -35rpx;
    position: absolute;
}
</style>
