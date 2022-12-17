<template>
    <BusinessCard
        :user="user"
        @update-user-msg="updateUser"
        @update-usernick-name="openNickInput"
    ></BusinessCard>

    <u-modal
        :show="show"
        title="修改用户名"
        :closeOnClickOverlay="true"
        :showCancelButton="true"
        :buttonReverse="true"
        :zoom="false"
        @close="cancelUpdateUserName"
        @cancel="cancelUpdateUserName"
        @confirm="confirmUpdateUserName"
    >
        <template #default>
            <view>
                <input
                    text-center
                    mt-6
                    mb-1
                    b-b-3
                    placeholder="请输入用户名"
                    border="surround"
                    type="nickname"
                    @blur="updateNameFun"
                />
            </view>
        </template>
    </u-modal>

    <view m-5>
        <u-cell title="我的评论信息" isLink>
            <template #value>
                <text b-rounded-30 bg-red-3 w-60 center>99</text>
            </template>
        </u-cell>
        <u-cell title="我的点赞信息" isLink>
            <template #value>
                <text b-rounded-30 bg-red-3 w-60 center>99</text>
            </template>
        </u-cell>
    </view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { updateUserName } from "~/api/user";

import BusinessCard from "~/components/BusinessCard/BusinessCard.vue";
import { useUsersStore } from "~/store/user";

const useStore = useUsersStore();
const { user } = storeToRefs(useStore);
const { updateUser, setUser } = useStore;
const show = ref(false);
const updateName = ref("");

function openNickInput() {
    show.value = true;
}

function cancelUpdateUserName() {
    show.value = false;
}
function confirmUpdateUserName() {
    if (updateName.value) {
        updateUserName(updateName.value)
            .then((res) => {
                if (res.code == 200) {
                    setUser(res.data);
                }
            })
            .finally(() => {
                show.value = false;
            });
    }
}
function updateNameFun(e: any) {
    updateName.value = e.detail.value;
}
</script>
