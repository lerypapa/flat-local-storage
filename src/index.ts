interface StorageConfig {
  name: string;
  version: string;
}

type ItemValue = any;

class Storage {
  key: string = '';
  name: string = '';
  version: string = '';

  init(configs: StorageConfig) {
    this.name = configs.name;
    this.version = configs.version;
    this.key = `${this.name}-${this.version}`;
  }

  genKey(subKey: string) {
    return `${this.key}-${subKey}`;
  }

  setItem(subKey: string, value: ItemValue) {
    let stringifiedValue: string = '';
    if (typeof value !== 'string') {
      try {
        stringifiedValue = `data:json;${JSON.stringify(value)}`;
      } catch (error) {
        console.error(error);
      }
    } else {
      stringifiedValue = `data:string;${value}`;
    }
    window.localStorage.setItem(this.genKey(subKey), stringifiedValue);
  }

  getItem(subKey: string, defaultValue: ItemValue): ItemValue {
    const value = window.localStorage.getItem(this.genKey(subKey));
    if (value === null) {
      // nothing has been set for this specific subKey
      return defaultValue || value;
    }
    const formatRegex = /data:(?<type>\w+);(?<value>.*)/g;
    const match: any = formatRegex.exec(value);
    if (match && match.groups) {
      if (match.groups.type === 'string') {
        return match.groups.value;
      }
      try {
        return JSON.parse(match.groups.value);
      } catch (error) {
        return undefined;
      }
    }
    return undefined;
  }

  removeItem(subKey: string) {
    localStorage.removeItem(this.genKey(subKey))
  }

  clear() {
    localStorage.clear()
  }
}

export default new Storage();