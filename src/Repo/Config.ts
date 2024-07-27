class Config {
  public readonly coreAPI: string;
  constructor() {
    this.coreAPI = import.meta.env.VITE_BASE_URL;
  }
}

export default new Config();

