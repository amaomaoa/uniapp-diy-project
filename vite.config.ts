import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import { presetUno } from "unocss";
import path from "path";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        alias(),
        uni({
            vueOptions: {
                reactivityTransform: true,
            },
        }),
        Unocss({
            presets: [
                presetIcons({
                    prefix: "i-",
                    extraProperties: {
                        display: "inline-block",
                    },
                }),
            ],
            variants: presetUno().variants,
        }),
    ],

    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
});
