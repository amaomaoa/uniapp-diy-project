<template>
    <view m-4>
        <u--form labelPosition="left" :model="form" ref="formRef">
            <u-form-item
                :required="true"
                labelWidth="auto"
                label="配件单名: "
                prop="name"
                borderBottom
            >
                <input type="text" b-b v-model="form.name" />
            </u-form-item>

            <u-form-item
                labelWidth="auto"
                label="CPU: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="cpuComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(2)"
                />
            </u-form-item>

            <u-form-item
                labelWidth="auto"
                label="主板: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="motherboardComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(3)"
                />
            </u-form-item>
            <u-form-item
                labelWidth="auto"
                label="显卡: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="graphicsCardComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(4)"
                />
            </u-form-item>
            <u-form-item
                labelWidth="auto"
                label="内存: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="memoryComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(5)"
                />
            </u-form-item>
            <u-form-item
                labelWidth="auto"
                label="硬盘: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="storeComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(6)"
                />
            </u-form-item>
            <u-form-item
                labelWidth="auto"
                label="电源: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="powerComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(7)"
                />
            </u-form-item>
            <u-form-item
                labelWidth="auto"
                label="机箱: "
                prop="cpuId"
                borderBottom
            >
                <u-cell
                    :border="false"
                    :title="chassisComputed"
                    isLink
                    :arrowDirection="cpuArrowDirection"
                    @click="getOption(8)"
                />
            </u-form-item>
            <u-form-item labelWidth="auto" label="预计价格: " borderBottom>
                <text style="font-size: 30rpx" mt-1 ml-3>
                    {{ price }}
                </text>
            </u-form-item>
        </u--form>
        <view mt-5>
            <u-button type="primary" text="确定" @click="submit"></u-button>
        </view>
        <u-picker
            :show="show"
            :loading="loading"
            ref="picker"
            keyName="name"
            :closeOnClickOverlay="true"
            @close="pickerClose"
            @cancel="pickerClose"
            @confirm="pickerConfirm"
            :defaultIndex="[0]"
            :immediateChange="true"
        ></u-picker>
        <u-loading-page
            :loading="loading"
            bg-color="#00ff0000"
            icon-size="36"
            loadingMode="semicircle"
        />
    </view>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { addorupdateUserConfigs, getCateAcce } from "~/api/configs";
import { useConfigStore } from "~/store/config";
const props = defineProps<{
    configs?: string;
}>();

type DirectivesType = "left" | "up" | "down";

const form = ref<Configs>({});
const formRef = ref();

const nowChoose = ref<keyof Configs>();

const picker = ref();
const loading = ref(false);

const cpuArrowDirection = ref<DirectivesType>();
const { configMap, userConfigs } = storeToRefs(useConfigStore());
// const { getUserAllConfigs } = useConfigStore();

const show = ref(false);

const rules = {
    name: {
        type: "string",
        required: true,
        message: "请填写配件单名",
        trigger: ["blur", "change"],
    },
};

const configsKey: Array<keyof Configs> = [
    "cpuId",
    "motherboardId",
    "graphicsCardId",
    "memoryId",
    "storeId",
    "powerId",
    "chassisId",
];

const cpuComputed = computed(() =>
    form.value.cpuId ? configMap.value[form.value.cpuId].name : "请选择CPU"
);

const motherboardComputed = computed(() =>
    form.value.motherboardId
        ? configMap.value[form.value.motherboardId].name
        : "请选择主板"
);

const graphicsCardComputed = computed(() =>
    form.value.graphicsCardId
        ? configMap.value[form.value.graphicsCardId].name
        : "请选择显卡"
);

const memoryComputed = computed(() =>
    form.value.memoryId
        ? configMap.value[form.value.memoryId].name
        : "请选择内存"
);

const storeComputed = computed(() =>
    form.value.storeId ? configMap.value[form.value.storeId].name : "请选择硬盘"
);

const powerComputed = computed(() =>
    form.value.powerId ? configMap.value[form.value.powerId].name : "请选择电源"
);

const chassisComputed = computed(() =>
    form.value.chassisId
        ? configMap.value[form.value.chassisId].name
        : "请选择机箱"
);

const price = computed(() => {
    let p = 0;
    configsKey.forEach((k) => {
        if (form.value[k]) {
            p += Number(configMap.value[form.value[k]!].price);
        }
    });
    form.value["price"] = p;
    return p.toFixed(2);
});
/**
 * 获取可以兼容的配件
 * */
function getOption(categoryId: number) {
    loading.value = true;
    nowChoose.value = configsKey[categoryId - 2];
    getCateAcce(categoryId, form.value).then((res) => {
        picker.value.setColumnValues(0, res.data);
        loading.value = false;
        show.value = true;
    });
}

function pickerClose() {
    show.value = false;
}

function pickerConfirm(e: {
    columnIndex: number;
    value: Config[];
    values: Config[];
    index: number;
}) {
    const {
        columnIndex,
        value,
        values, // values为当前变化列的数组内容
        index,
    } = e;
    form.value[nowChoose.value!] = value[0].id;
    show.value = false;
}

function submit() {
    const name = form.value.name?.trim();
    if (!name) {
        uni.$u.toast("配件单名不能为空");
        return;
    }
    addorupdateUserConfigs(form.value).then((res) => {
        uni.$u.toast("添加成功");
        // getUserAllConfigs();
        uni.switchTab({
            url: "/pages/configs/index",
        });
    });
}

onMounted(() => {
    if (props.configs) {
        const configs: Configs = JSON.parse(props.configs);
        form.value = configs;
    }
});
</script>
