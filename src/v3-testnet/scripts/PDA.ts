import {
  UserIdentifierType,
  PDABody,
  UpdatePDABody,
  UpdatePDAStatusData,
  PDAStatus,
} from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";
import { readFile } from "fs/promises";

export const createPDAV3 = async () => {
  let createPDABody: PDABody = {
    title: "Gateway Core Team Member",
    description:
      "Given to people that have had contributed to the beginning of Gateway",
    owner: {
      type: UserIdentifierType.USERNAME,
      value: "sid",
    },
    claim: { name: "test" },
    tags: ["test"],
  };

  return await gatewayInstanceV3.pda.createPDA(createPDABody);
};

// here only normal PDAS can be updated File based PDAS cannot be updated rn!
// and for updateing a normal PDA we need to pass title,description,claim again(add link here)
export const updatePDAV3 = async (
  pdaId: number,
  title: string,
  description: string,
  claim: any
) => {
  let updatedPDABody: UpdatePDABody = {
    id: pdaId,
    title,
    description,
    claim,
  };

  return await gatewayInstanceV3.pda.updatePDA(updatedPDABody);
};

export const changePDAStatusV3 = async (pdaId: number, status: PDAStatus) => {
  const changePDAStatusBody: UpdatePDAStatusData = {
    id: pdaId,
    status,
  };

  return await gatewayInstanceV3.pda.changePDAStatus(changePDAStatusBody);
};

export const getPDAV3 = async (pdaId: number) => {
  return await gatewayInstanceV3.pda.getPDA(pdaId);
};

export const getPDASV3 = async () => {
  return await gatewayInstanceV3.pda.getPDAs();
};

export const createFilePDAV3 = async () => {
  let createPDABody: PDABody = {
    title: "Gateway Core Team Member",
    description:
      "Given to people that have had contributed to the beginning of Gateway",
    owner: {
      type: UserIdentifierType.USERNAME,
      value: "sid",
    },
    tags: ["test"],
  };

  const { createPDA: pdaAsFile } = await gatewayInstanceV3.pda.createPDA(
    createPDABody
  );
  const fileBuffer = await readFile("./sample-image.jpg");
  // make sure to pass file name + extension else the file will be uploaded as
  // octect-stream and will not work when decrypted!
  const { data } = await gatewayInstanceV3.pda.uploadFileAsPDA(
    fileBuffer,
    pdaAsFile.id,
    "sample-image.jpg"
  );
  return data;
};
