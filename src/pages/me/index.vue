<template>
    <BusinessCard :user="user"></BusinessCard>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import BusinessCard from "~/components/BusinessCard/BusinessCard.vue";

import { useUsersStore } from "~/store/user";
const useStore = useUsersStore();
const { user } = storeToRefs(useStore);
</script>
