<template>
    <view h-100%>
        <scroll-view
            :scroll-y="true"
            :refresher-triggered="refresher"
            @scroll="dragging"
            :refresher-enabled="true"
            :scroll-top="scrollTop"
            @refresherrefresh="addmsg"
            h-100%
        >
            <MessageCard
                v-for="m in msg"
                :msg="m.msg"
                :color="m.color"
                :type="m.type"
            ></MessageCard>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import MessageCard from "@/components/MessageCard/MessageCard.vue";
import { onMounted, ref } from "vue";
// const footer = ref("footer");
const refresher = ref(false);
const scrollTop = ref<Number>();
const msg = ref(
    new Array<{
        msg: string;
        type: 1 | 2;
        color: string;
    }>()
);
const values = ref(100);

onMounted(() => {
    addmsg();
    gotoButtom();
});

function addmsg() {
    refresher.value = true;

    let arr = msg.value;
    for (let i = 0; i < 5; i++) {
        values.value--;
        arr.unshift({
            msg: values.value.toString(),
            type: 1,
            color: "red",
        });
    }
    setTimeout(() => {
        refresher.value = false;
    }, 10);
}

function gotoButtom() {
    console.log(" gotoButtom");
    scrollTop.value = msg.value.length * 1000 - 1;
    setTimeout(() => {
        scrollTop.value = msg.value.length * 1000;
    }, 10);
}

function dragging(e: any) {}
defineExpose({
    gotoButtom,
});
</script>
