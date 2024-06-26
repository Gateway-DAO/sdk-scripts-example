import { Gateway } from "@gateway-dao/sdk";
import dotenv from "dotenv";

dotenv.config();

export const gatewayInstance = new Gateway({
  url: "https://protocol.mygateway.xyz/graphql",
  apiKey: process.env.API_KEY || "YOUR_API_KEY", // keep these protected in env files
  token: process.env.TOKEN || "YOUR_TOKEN", // keep these protected in env files
});
