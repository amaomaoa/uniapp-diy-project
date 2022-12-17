<template>
    <view flex flex-initial center>
        <textarea
            confirm-type="search"
            @confirm="send"
            placeholder="请输入"
            auto-height
            maxlength="100"
            flex-1
            text-37
            m-2
            v-model="msg"
        />
        <button
            :plain="!free"
            h-70
            m-2
            center
            style="border: 0px solid rgba(255, 255, 255, 0.5)"
            :loading="!free"
            @click="send"
            :class="free ? 'i-carbon-send-alt-filled' : ''"
        />
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits<{
    (e: "send", msg: string): void;
}>();

const porps = defineProps<{
    free: boolean; //判断是否空闲
}>();

const msg = ref("");

function send() {
    if (msg.value && porps.free) {
        emits("send", msg.value);
        msg.value = "";
    }
}
</script>
