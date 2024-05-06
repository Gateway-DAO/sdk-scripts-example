import { gatewayInstance } from "../GatewayInstance";

export async function createDataRequest() {
  const { createDataRequest } = await gatewayInstance.request.createDataRequest(
    {
      dataRequestTemplateId: "d9d99666-4f6a-4a77-9f99-141f1405b1af",
      dataUse:
        "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
      owner: { type: "GATEWAY_ID", value: "saviour1002" },
    }
  );
  console.log(createDataRequest);
}

export async function getDataRequest() {
  const { dataRequest } = await gatewayInstance.request.getDataRequest(
    "a90e9dbd-0c8e-4dcb-9778-5c1799a2fcc1"
  );
  console.log(dataRequest);
}

export async function getDataRequests() {
  const { dataRequests } = await gatewayInstance.request.getDataRequests();
  console.log(dataRequests);
}

export async function dataRequestStatus() {
  const { dataRequestStatus } =
    await gatewayInstance.request.getDataRequestStatus(
      "<--request id of the request template -->"
    );

  console.log(dataRequestStatus);
}
