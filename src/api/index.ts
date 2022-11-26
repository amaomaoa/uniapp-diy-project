const baseUrl = "http://127.0.0.1:8080";

function getToken() {
    let tokenName = uni.getStorageSync("tokenName");
    let tokenValue = uni.getStorageSync("tokenValue");
    if (tokenName == null || tokenName == "") {
        tokenName == "tokenName";
    }

    if (tokenValue == null || tokenValue == "") {
        tokenValue = "";
    }
    return {
        tokenName: tokenValue,
    };
}

export function request(api: string, options?: any) {
    const url = baseUrl + api;

    const promise = new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: options.type || "GET",
            data: options.data || {},
            header: {
                ...getToken(),
                ...(options.header || {}),
            },
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
    return promise;
}

export const get = (api: string) => {
    return request(api);
};

export const post = (api: string, data?: any) => {
    return request(api, {
        type: "POST",
        data: {
            ...data,
        },
        header: {
            "content-type": "application/json",
        },
    });
};
