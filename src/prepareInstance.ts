import { Gateway } from "@gateway-dao/sdk";
import { apiKey, token, url } from "./consts";

export const gatewayInstance = new Gateway({
  url: url,
  apiKey: apiKey,
  token: token,
});
