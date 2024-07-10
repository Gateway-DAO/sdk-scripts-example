import { CreateUserInput, SignCipherEnum } from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";
import { loginUserMutationMutationVariables } from "@gateway-dao/sdk/dist/gatewaySdk/sources/Gateway";

export const checkUsernameAvailabilityV3 = async (username: string) => {
  return await gatewayInstanceV3.auth.checkUsernameAvailability(username);
};

export const checkDIDAvailabilityV3 = async (did: string) => {
  return await gatewayInstanceV3.auth.checkDIDAvailability(did);
};

export const createUserNonceV3 = async (input: CreateUserInput) => {
  return await gatewayInstanceV3.auth.createUserNonce(input);
};

export const createUserV3 = async ({
  signature,
  signingKey,
  signingCipher,
}: {
  signature: string;
  signingKey: string;
  signingCipher?: SignCipherEnum;
}) => {
  return await gatewayInstanceV3.auth.createUser({
    signature,
    signingKey,
    signingCipher,
  });
};

export const loginUserV3 = async (input: loginUserMutationMutationVariables) => {
  return await gatewayInstanceV3.auth.loginUser(input);
};
