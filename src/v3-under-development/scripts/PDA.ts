import {
  generateNewEtherumWallet,
  jsonEncoder,
  PDAStatusV3,
  signMessage,
  UserIdentifierTypeV3,
} from "@gateway-dao/sdk/dist/src/GatewayV3";
import { gatewayInstanceV3 } from "../GatewayInstance";
import {
  PDABody,
  UpdatePDABody,
  UpdatePDAStatusData,
} from "@gateway-dao/sdk/dist/gatewaySdk/sources/GatewayV3";

export const createPDAV3 = async () => {
  let createPDABody: PDABody = {
    title: "Gateway Core Team Member",
    description:
      "Given to people that have had contributed to the beginning of Gateway",
    owner: {
      type: UserIdentifierTypeV3.USERNAME,
      value: "sid",
    },
    claim: { name: "test" },
    tags: ["test"],
  };

  let encodedObject = jsonEncoder(createPDABody);
  let signature = await signMessage(gatewayInstanceV3.wallet, encodedObject);
  return await gatewayInstanceV3.pda.createPDA({
    data: createPDABody,
    signature,
    signingKey: await gatewayInstanceV3.wallet.getAddress(),
  });
};

export const updatePDAV3 = async (pdaId: number) => {
  let updatedPDABody: UpdatePDABody = {
    id: pdaId,
    title: "updated title",
  };

  let encodedObject = jsonEncoder(updatedPDABody);
  let signature = await signMessage(gatewayInstanceV3.wallet, encodedObject);
  return await gatewayInstanceV3.pda.updatePDA({
    data: updatedPDABody,
    signature,
    signingKey: await gatewayInstanceV3.wallet.getAddress(),
  });
};

export const changePDAStatusV3 = async (pdaId: number, status: PDAStatusV3) => {
  const changePDAStatusBody: UpdatePDAStatusData = {
    id: pdaId,
    status,
  };

  let encodedObject = jsonEncoder(changePDAStatusBody);
  let signature = await signMessage(gatewayInstanceV3.wallet, encodedObject);
  return await gatewayInstanceV3.pda.changePDAStatus({
    data: changePDAStatusBody,
    signature,
    signingKey: await gatewayInstanceV3.wallet.getAddress(),
  });
};

export const getPDAV3 = async (pdaId: number) => {
  return await gatewayInstanceV3.pda.getPDA(pdaId);
};

const createFilePDAV3 = async () => {
  let createPDABody: PDABody = {
    title: "Gateway Core Team Member",
    description:
      "Given to people that have had contributed to the beginning of Gateway",
    owner: {
      type: UserIdentifierTypeV3.USERNAME,
      value: "sid",
    },
    claim: { name: "test" },
    tags: ["test"],
  };

  let encodedObject = jsonEncoder(createPDABody);
  let signature = await signMessage(gatewayInstanceV3.wallet, encodedObject);
  const { createPDA } = await gatewayInstanceV3.pda.createPDA({
    data: createPDABody,
    signature,
    signingKey: await gatewayInstanceV3.wallet.getAddress(),
  });
  //   this method parameters will change just for reference
  //   const { data } = await gatewayInstanceV3.pda.uploadFileAsPDA(
  //     fileData,
  //     pdaAsFile.id,
  //     "test.png",
  //     "png"
  //   );
};
