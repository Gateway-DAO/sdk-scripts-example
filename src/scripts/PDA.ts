import { gatewayInstance } from "../GatewayInstance";
import { PDAStatus, UserIdentifierType } from "@gateway-dao/sdk";

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

export async function updatePDA() {
  // add the fields you want to update

  const { updatePDA } = await gatewayInstance.pda.updatePDA({
    id: "exisiting-id-of-your-pda",
    title: "Changed PDA title",
  });
  console.log(updatePDA);
}

export async function changePDASatus() {
  const { changePDAStatus } = await gatewayInstance.pda.changePDAStatus({
    id: "exisiting-id-of-your-pda",
    status: PDAStatus.Valid,
  });
  console.log(changePDAStatus);
}

export async function getPDA() {
  const { PDA } = await gatewayInstance.pda.getPDA("exisiting-id-of-your-pda");
  console.log(PDA);
}
