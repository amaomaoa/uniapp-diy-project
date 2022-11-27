import { get, post } from ".";

interface LoginResults {
    tokenName: string;
    tokenValue: string;
}

export const login = () => {
    uni.login({
        provider: "weixin",
        success: (data) => {
            post<LoginResults>("/my/public/login", {
                code: data.code,
            }).then((res) => {
                const tokenName = res.data.tokenName;
                const tokenValue = res.data.tokenValue;
                uni.setStorageSync("tokenName", tokenName);
                uni.setStorageSync("tokenValue", tokenValue);
                get("/my/public/checkLogin").then((res) => console.log(res));
            });
        },
    });
};
