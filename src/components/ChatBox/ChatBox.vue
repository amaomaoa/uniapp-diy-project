<template>
    <view h-100%>
        <scroll-view
            :scroll-with-animation="true"
            :scroll-y="true"
            :refresher-enabled="true"
            :scroll-top="scrollTop"
            h-100%
        >
            <MessageCard
                v-for="(m, item) in msgs"
                :key="item"
                :msg="m.msg"
                :color="m.color"
                :type="m.type"
                :avatar="m.avatar"
                :configs="m.configs"
                @addToMyConfigs="addToMyConfigs"
            ></MessageCard>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import MessageCard from "~/components/MessageCard/MessageCard.vue";
import { ref, defineProps } from "vue";
// const footer = ref("footer");
// const refresher = ref(false);
const scrollTop = ref<Number>();

const props = defineProps<{
    msgs: ChatMsg[];
}>();
function gotoButtom() {
    // TODO 还要算一下
    scrollTop.value = 999999;
    setTimeout(() => {
        scrollTop.value = 999999 + 100;
    }, 10);
}
const emit = defineEmits<{
    (e: "addToMyConfigs", configs: Configs): void;
}>();

function addToMyConfigs(configs: Configs) {
    emit("addToMyConfigs", configs);
}

defineExpose({
    gotoButtom,
});
</script>
