import { login } from "./user";

const baseUrl = "http://127.0.0.1:8080";
interface Params {
    [key: string]: string | number;
}

function appendParamsToApi(api: string, params: Params) {
    const paramStrings = [];
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            paramStrings.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
            );
        }
    }

    if (paramStrings.length > 0) {
        api += "?" + paramStrings.join("&");
    }
    return api;
}

function getToken() {
    let tokenName = uni.getStorageSync("tokenName");
    let tokenValue = "Bearer " + uni.getStorageSync("tokenValue");
    if (tokenName == null || tokenName == "") return {};
    return {
        [tokenName]: tokenValue,
    };
}

/**
 *
 * @param T 返回类型
 * @returns
 */
export function request<T>(api: string, options?: any) {
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
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
    return promise;
}

export const get = <T = any>(api: string, params?: Params) => {
    if (params) {
        api = appendParamsToApi(api, params);
    }
    return request<R<T>>(api, {
        type: "GET",
    });
};

export const post = <T = any, O = any>(
    api: string,
    data?: any,
    params?: Params
) => {
    if (params) {
        api = appendParamsToApi(api, params);
    }
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

export const put = <T = any, O = any>(
    api: string,
    data?: any,
    params?: Params
) => {
    if (params) {
        api = appendParamsToApi(api, params);
    }
    return request<R<T>>(api, {
        type: "PUT",
        data: {
            ...data,
        },
        header: {
            "content-type": "application/json",
        },
    });
};

export const deleting = <T = any, O = any>(api: string, params?: Params) => {
    if (params) {
        api = appendParamsToApi(api, params);
    }
    return request<R<T>>(api, {
        type: "DELETE",
    });
};
