import { get } from ".";

/**
 * 获取所有配置信息
 * Map{
 *  id:config
 * }
 */
export const getConfigMap = () => {
    return get<ConfigMap>("/system/accessoriesList/map");
};
