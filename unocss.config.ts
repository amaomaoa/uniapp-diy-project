import presetWeapp from "unocss-preset-weapp";
import { defineConfig } from "unocss";
import {
    transformerAttributify,
    transformerClass,
} from "unocss-preset-weapp/transformer";

export default defineConfig({
    presets: [
        // https://github.com/MellowCo/unocss-preset-weapp
        presetWeapp(),
    ],
    shortcuts: [
        {
            "border-base": "border border-gray-500_10",
            center: "flex justify-center items-center",
        },
    ],

    // v0.1.14 unplugin-attributify-to-class 和 unplugin-transform-class 内置到 transformer 中
    transformers: [
        // options 见 https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
        transformerAttributify(),

        // options 见 https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
        transformerClass(),
    ],
});
