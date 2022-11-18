<template>
    <view>
        <button @click="goto">goto</button>
    </view>
</template>

<script setup lang="ts">
function goto() {
    uni.navigateTo({
        url: "/subpages/me/getConfig",
    });
}
</script>
