import { Gateway, SignCipherEnum } from "@gateway-dao/sdk";
import dotenv from "dotenv";

dotenv.config();

// By Default the wallet is considerd as etherum(Below is option to pass Solana based wallet)
export const gatewayInstanceV3 = new Gateway({
  url: "https://v3-dev.protocol.mygateway.xyz/graphql",
  apiKey: process.env.V3_API_KEY!, // keep these protected in env files always
  token: process.env.V3_TOKEN!, // keep these protected in env files always
  walletPrivateKey: process.env.WALLET_PRIVATE_KEY!, // keep these protected in env files always
});

// Option to pass Solana based private key!
// export const gatewayInstanceV3 = new Gateway({
//   url: "https://v3-dev.protocol.mygateway.xyz/graphql",
//   apiKey: process.env.V3_API_KEY!, // keep these protected in env files always
//   token: process.env.V3_TOKEN!, // keep these protected in env files always
//   walletPrivateKey: process.env.WALLET_PRIVATE_KEY!, // keep these protected in env files always
//   walletType: SignCipherEnum.ED25519,
// });
