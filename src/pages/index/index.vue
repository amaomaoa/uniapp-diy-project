<template>
    <view flex flex-col h-100%>
        <ChatBox flex-1 overflow-auto />
        <MessageInput />
    </view>
</template>

<script setup lang="ts">
import MessageInput from "@/components/MessageInput/MessageInput.vue";
import ChatBox from "@/components/ChatBox/ChatBox.vue";
</script>
