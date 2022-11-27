import { login } from "./user";

const baseUrl = "http://127.0.0.1:8080";

function getToken() {
    let tokenName = uni.getStorageSync("tokenName");
    let tokenValue = "Bearer " + uni.getStorageSync("tokenValue");
    if (tokenName == null || tokenName == "") return {};
    return {
        [tokenName]: tokenValue,
    };
}

// todo 需要写一个返回 res 的类型体操
export function request<T = any>(api: string, options?: any) {
    const url = baseUrl + api;

    const promise = new Promise<T>((resolve, reject) => {
        uni.request({
            url: url,
            method: options.type || "GET",
            data: options.data || {},
            header: {
                ...getToken(),
                ...options.header,
            },
            success: (res: any) => {
                if (res.data.code == 401) {
                    login();
                }
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
    return promise;
}

export const get = <T = any>(api: string) => {
    return request<R<T>>(api, {
        type: "GET",
    });
};

export const post = <T = any>(api: string, data?: any) => {
    return request<R<T>>(api, {
        type: "POST",
        data: {
            ...data,
        },
        header: {
            "content-type": "application/json",
        },
    });
};
