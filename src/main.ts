import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from "pinia";
import uviewPlus from "uview-plus";
import "uno.css";

export function createApp() {
    const app = createSSRApp(App);
    app.use(Pinia.createPinia());
    app.use(uviewPlus);

    return {
        app,
        Pinia, // 此处必须将 Pinia 返回
    };
}
