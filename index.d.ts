interface StorageConfig {
    name: string;
    version: string;
}
declare type ItemValue = any;
declare class Storage {
    key: string;
    name: string;
    version: string;
    init(configs: StorageConfig): void;
    genKey(subKey: string): string;
    setItem(subKey: string, value: ItemValue): void;
    getItem(subKey: string, defaultValue: ItemValue): ItemValue;
    removeItem(subKey: string): void;
    clear(): void;
}
declare const _default: Storage;
export default _default;
