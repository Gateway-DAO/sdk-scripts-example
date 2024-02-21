import { gatewayInstance } from "../GatewayInstance";
import { UserIdentifierType } from "@gateway-dao/sdk";

export async function createPDA() {
  let obj = {
    dataModelId: "9f27397e-27f2-4c30-b1b7-829371de4df5",
    description: "Description of the PDA",
    title: "Favorite Person on Crypto Twitter",
    claim: {
      handleName: "@gateway_xyz",
      favoritePosts: ["awesome"],
    },
    owner: {
      type: UserIdentifierType.GATEWAY_ID,
      value: "saviour1002",
    },
  };
  const { createPDA } = await gatewayInstance.pda.createPDA(obj);
  console.log(createPDA);
}
