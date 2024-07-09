import { CreateProofArgs } from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";

export const createProofV3 = async (pdaId: number, keyBlob: string) => {
  const proofObject: CreateProofArgs = {
    verifier: {
      type: "USERNAME",
      value: "sid",
    },
    claims: [
      {
        pdaId,
        keyBlob,
      },
    ],
  };

  return await gatewayInstanceV3.proof.createProof(proofObject);
};
