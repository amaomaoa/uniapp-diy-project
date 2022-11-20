<template>
    <view h-100%>
        <scroll-view
            :scroll-with-animation="true"
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
                :avatar="m.avatar"
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
        avatar: string;
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
            msg:
                `
            注意点：1. scroll-view要有明确的高度
2. bottomId和要滚动到的组件的id要一致，且是变化的
3. 使用setTimeout方法来延迟更改变量
` + values.value.toString(),
            type: values.value % 2 == 0 ? 1 : 2,
            color: "red",
            avatar: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        });
    }
    setTimeout(() => {
        refresher.value = false;
    }, 10);
}

function gotoButtom() {
    // TODO 还要算一下
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
