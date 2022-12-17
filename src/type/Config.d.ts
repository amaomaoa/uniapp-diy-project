interface ConfigMap {
    [key: number | string]: Config;
}

interface Config {
    id: string;
    /**
     * 配件名
     */
    name: string;
    /**
     * 配件编号
     */
    number: string;
    /**
     * 配件价格
     */
    price: number;

    /**
     * 警告
     */
    warning: string;
}

interface Configs {
    /**
     * 配件id
     */
    id?: string;
    /**
     * 配件单名
     */
    name?: string;
    /**
     * cpu
     */
    cpuId?: number | string;
    /**
     * 主板
     */
    motherboardId?: number | string;
    /**
     * 显卡
     */
    graphicsCardId?: number | string;
    /**
     * 内存
     */
    memoryId?: number | string;
    /**
     * 储存
     */
    storeId?: number | string;
    /**
     * 电源
     */
    powerId?: number | string;
    /**
     * 机箱
     */
    chassisId?: number | string;

    /**
     * 价格
     */
    price?: number | string;
}
