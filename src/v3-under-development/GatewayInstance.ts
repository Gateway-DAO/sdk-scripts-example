import { GatewayV3 } from "@gateway-dao/sdk/dist/src/GatewayV3";
import dotenv from "dotenv";

dotenv.config();

export const gatewayInstanceV3 = new GatewayV3({
  url: "https://v3-dev.protocol.mygateway.xyz/graphql",
  apiKey: process.env.V3_API_KEY!, // keep these protected in env files always
  token: process.env.V3_TOKEN!, // keep these protected in env files always
  walletPrivateKey: process.env.WALLET_PRIVATE_KEY!,
});
