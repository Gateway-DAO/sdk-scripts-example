import { gatewayInstance } from "../GatewayInstance";

export async function createDataRequest() {
  const { createDataRequest } = await gatewayInstance.request.createDataRequest(
    {
      dataRequestTemplateId: "60e369b3-4400-4e9b-840b-78de91274895",
      dataUse:
        "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
      owner: { type: "GATEWAY_ID", value: "r11manish" },
    }
  );
  console.log(createDataRequest);
}

export async function getDataRequest() {
  const { dataRequest } = await gatewayInstance.request.getDataRequest(
    "<--request id of the request template -->"
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
