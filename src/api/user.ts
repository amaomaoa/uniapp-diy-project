import { post } from ".";

export const login = () => {
    uni.login({
        provider: "weixin",
        success: (data) => {
            post("/my/public/login", {
                code: data.code,
            }).then((res) => {
                console.log(res);
            });
        },
    });
};
