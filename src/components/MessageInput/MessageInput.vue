<template>
    <view flex flex-initial center bg-gray-2 pb-2>
        <button i-carbon-microphone-filled h-70 m-2 />
        <textarea
            placeholder="请输入"
            auto-height
            maxlength="100"
            flex-1
            text-37
            m-2
            v-model="msg"
        />
        <button h-70 m-2 i-carbon-send-alt-filled @click="send" />
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits<{
    (e: "send", msg: string): void;
}>();

const msg = ref("");

function send() {
    emits("send", msg.value);
}
</script>
