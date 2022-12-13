import { post } from ".";

import { useUsersStore } from "~/store/user";
interface LoginResults {
    saTokenInfo: {
        tokenName: string;
        tokenValue: string;
    };
    user: User;
}

export const login = () => {
    const store = useUsersStore();
    const { setUser } = store;
    uni.login({
        provider: "weixin",
        success: (data) => {
            post<LoginResults>("/my/public/login", {
                code: data.code,
            }).then((res) => {
                const data = res.data;
                const tokenName = data.saTokenInfo.tokenName;
                const tokenValue = data.saTokenInfo.tokenValue;
                uni.setStorageSync("tokenName", tokenName);
                uni.setStorageSync("tokenValue", tokenValue);
                setUser(res.data.user);
            });
        },
    });
};
