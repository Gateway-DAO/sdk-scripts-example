import { Gateway } from "@gateway-dao/sdk";
import dotenv from "dotenv";

dotenv.config();

// NOTE: SOON V2 WILL BE DEPERACTED KINDLY USE V3 SDK CHECK V3 EXAMPLES
export const gatewayInstance = new Gateway({
  url: "https://protocol.mygateway.xyz/graphql",
  apiKey: process.env.API_KEY || "YOUR_API_KEY", // keep these protected in env files
  token: process.env.TOKEN || "YOUR_TOKEN", // keep these protected in env files
});
