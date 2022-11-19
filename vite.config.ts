import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import UnocssIcons from "@unocss/preset-icons";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni({
            vueOptions: {
                reactivityTransform: true,
            },
        }),
        Unocss({
            presets: [
                UnocssIcons({
                    prefix: "i-",
                    extraProperties: {
                        display: "inline-block",
                    },
                }),
            ],
        }),
    ],
});
