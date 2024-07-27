class ConfigNode {
  public readonly coreAPI: string;
  constructor() {
    this.coreAPI = import.meta.env.VITE_BASE_URL_NODE;
  }
}

export default new ConfigNode();

