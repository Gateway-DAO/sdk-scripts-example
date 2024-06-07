import { Chain } from "@gateway-dao/sdk";
import { gatewayInstance } from "../GatewayInstance";

export async function createNonceForNewUser() {
  const nonce = await gatewayInstance.auth.createWalletNonce(
    "0x0000000000000000000000000000000000000000", // user address
    Chain.EVM // chain
  );

  console.log(nonce); // ask the user to sign this nonce
}
