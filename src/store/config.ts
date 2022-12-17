import { defineStore } from "pinia";
import { ref } from "vue";
import { getConfigMap } from "~/api/config";

// 第一个参数是应用程序中 store 的唯一 id
export const useConfigStore = defineStore("config", () => {
    const configMap = ref<ConfigMap>({});
    const getMap = () => {
        getConfigMap().then((res) => {
            configMap.value = res.data;
        });
    };
    return { configMap, getMap };
});
