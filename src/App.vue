<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { login } from "./api/user";
import { useConfigStore } from "~/store/config";
onLaunch(() => {
    login();
    const { getMap } = useConfigStore();
    getMap();
});
onShow(() => {});
onHide(() => {});
</script>
<style lang="scss">
@import "uview-plus/index.scss";
page {
    height: 100%;
    background-color: #f8f8f8;
}
</style>
