import { get, post, put } from ".";
import { useUsersStore } from "~/store/user";
interface LoginResults {
    saTokenInfo: {
        tokenName: string;
        tokenValue: string;
    };
    user: User;
}
const baseApi = "/my/public";

export const login = () => {
    const store = useUsersStore();
    const { setUser } = store;
    uni.login({
        provider: "weixin",
        success: (data) => {
            post<LoginResults>(`${baseApi}/login`, {
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

export const userMsg = () => {
    return get<User>(`${baseApi}/getUserMsg`);
};

export const updateUserName = (name: string) => {
    return put<User>(`${baseApi}/updateUserName`, undefined, {
        name: name,
    });
};
