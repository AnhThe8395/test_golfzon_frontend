import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const browserConfig = {
  apiBaseUrlService: publicRuntimeConfig.apiBaseUrlService,
};

export { browserConfig };
