import { gatewayInstance } from "../GatewayInstance";
import {
  PDAStatus,
  UserIdentifierType,
  OrganizationIdentifierType,
} from "@gateway-dao/gateway-sdk-legacy";

export async function createPDA() {
  let obj = {
    dataModelId: "7f1e400e-b761-4e35-913d-09e500f36e79",
    description: "TESTING MODEL",
    title: "TESTING MODEL",
    claim: {
      model_id: "123",
    },
    owner: {
      type: UserIdentifierType.GATEWAY_ID,
      value: "YOUR_GATEWAY_ID",
    },
    organization: {
      type: OrganizationIdentifierType.GATEWAY_ID,
      value: "YOUR_ORG_ID",
    },
  };
  const { createPDA } = await gatewayInstance.pda.createPDA(obj);
  console.log(createPDA);
}

export async function updatePDA() {
  // add the fields you want to update

  const { updatePDA } = await gatewayInstance.pda.updatePDA({
    id: "existing-id-of-your-pda",
    title: "Changed PDA title",
  });
  console.log(updatePDA);
}

export async function changePDASatus() {
  const { changePDAStatus } = await gatewayInstance.pda.changePDAStatus({
    id: "existing-id-of-your-pda",
    status: PDAStatus.Valid,
  });
  console.log(changePDAStatus);
}

export async function getPDA() {
  const { PDA } = await gatewayInstance.pda.getPDA("exisiting-id-of-your-pda");
  console.log(PDA);
}

export async function getAllPDAs() {
  const pdas = await gatewayInstance.pda.getPDAs({
    filter: {
      issuer: { type: "GATEWAY_ID", value: "saviour1002" },
      owner: { type: "GATEWAY_ID", value: "user" },
      // organization: { type: "GATEWAY_ID", value: "" }, // pass the organization id if you want to filter by organization
    },
  });

  console.log(pdas);
}
