<template>
    <view flex flex-col h-100%>
        <ChatBox flex-1 overflow-auto ref="chatbox" />
        <MessageInput @send="send" />
    </view>
</template>

<script setup lang="ts">
import MessageInput from "@/components/MessageInput/MessageInput.vue";
import ChatBox from "@/components/ChatBox/ChatBox.vue";
import { ref } from "vue";

const chatbox = ref<InstanceType<typeof ChatBox> | null>(null);

function send(msg: string) {
    if (chatbox.value) {
        chatbox.value.gotoButtom();
    }
}
</script>
