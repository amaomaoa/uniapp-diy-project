<template>
    <view h-100%>
        <scroll-view
            :scroll-y="true"
            :refresher-triggered="refresher"
            @scroll="dragging"
            :refresher-enabled="true"
            :scroll-into-view="footer"
            @refresherrefresh="addmsg"
            h-100%
        >
            <MessageCard
                v-for="m in msg"
                :msg="m.msg"
                :color="m.color"
                :type="m.type"
            ></MessageCard>
            <text id="footer"></text>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import MessageCard from "@/components/MessageCard/MessageCard.vue";
import { onMounted, ref } from "vue";
const footer = ref("footer");
const refresher = ref(false);
const msg = ref(
    new Array<{
        msg: string;
        type: 1 | 2;
        color: string;
    }>()
);
const values = ref(100);

onMounted(() => {
    gotoButtom();
    addmsg();
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
    gotoButtom();
    setTimeout(() => {
        refresher.value = false;
    }, 10);
}

function gotoButtom() {
    footer.value = "footer";
}

function dragging(e: any) {}
</script>
