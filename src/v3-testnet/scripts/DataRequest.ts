import { DataRequestSchemaInput } from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";

export const createDataRequestV3 = async (dataModelId: string) => {
  let requestWithoutOrg: DataRequestSchemaInput = {
    schema: [{ id: dataModelId }],
    dataUse:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    owner: { type: "USER_DID", value: "sid" },
  };

  return await gatewayInstanceV3.request.createDataRequest(requestWithoutOrg);
};

export const getDataRequestV3 = async (dataRequestId: string) => {
  return await gatewayInstanceV3.request.getDataRequest(dataRequestId);
};

export const getDataRequestCountV3 = async () => {
  return await gatewayInstanceV3.request.getDataRequestCount();
};

export const getDataRequestStatusV3 = async (dataRequestId: string) => {
  return await gatewayInstanceV3.request.getDataRequestStatus(dataRequestId);
};

export const getDataRequestsV3 = async () => {
  return await gatewayInstanceV3.request.getDataRequests();
};

export const getRequestsReceivedV3 = async () => {
  return await gatewayInstanceV3.request.getRequestsReceived();
};

export const getRequestsSentV3 = async () => {
  return await gatewayInstanceV3.request.getRequestsSent();
};
