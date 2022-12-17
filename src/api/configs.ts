import { deleting, get, post } from ".";

const baseApi = "/my/public";

/**
 * 获取用户所有配置单
 * @returns
 */
export const getUserConfigs = () => {
    return get<Configs[]>(`${baseApi}/getUserAccessoriesList`);
};

/**
 * 添加/更新用户配置单 有id就是更新，没有id就是添加
 * @returns
 */
export const addorupdateUserConfigs = (configs: Configs) => {
    return post<void>(`${baseApi}/addOrUpdateUserConfigs`, configs);
};

/**
 * 获取可以兼容的配件
 */

export const getCateAcce = (id: number | string, configs: Configs) => {
    return post<Config[]>(`/system/accessoriesList/getCateAcce/${id}`, configs);
};

/**
 * 删除配件单
 */

export const deleteConfig = (id: string | number) => {
    return deleting<Boolean>(`${baseApi}/removeUserConfigs/${id}`);
};

export const recommendConfigs = (text: string) => {
    return get<RecommendVo>(`${baseApi}/recommend?text=${text}`);
};
