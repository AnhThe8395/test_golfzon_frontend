import AuthorizedInstance from "@/services/authorized-api";
import { browserConfig } from "@/common/constants";

const ApiService = AuthorizedInstance(browserConfig.apiBaseUrlService);

export default ApiService;

export * from "./product";
