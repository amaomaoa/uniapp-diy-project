<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { login } from "./api/user";
onLaunch(() => {
    console.log("App Launch");
    login();
});
onShow(() => {
    console.log("App Show");
});
onHide(() => {
    console.log("App Hide");
});
</script>
<style>
page {
    height: 100%;
}
</style>
