<template>
    <view>
        <button @click="goto">goto</button>
        <view m2 hover="op80">
            <view i-carbon-logo-github text-3xl text-black />
            <view i-carbon:3d-cursor text-3xl text-black />
            <button text-black text-3xl i-carbon-sun />
        </view>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            登录
        </button>
    </view>
</template>

<script setup lang="ts">
function goto() {
    uni.navigateTo({
        url: "/subpages/me/getConfig",
    });
}

function getPhoneNumber(e: any) {
    console.log(e.detail);
}
</script>
