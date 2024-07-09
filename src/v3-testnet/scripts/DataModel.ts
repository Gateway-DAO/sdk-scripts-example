import { DataModelBody } from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";

export const createDataModelV3 = async () => {
  let dataModelObject: DataModelBody = {
    title: "Person Schema",
    description: "A schema that defines a person",
    permissions: "ALL",
    tags: ["KYC", "Proof of Humanhood"],
    schema: {
      type: "object",
      default: {},
      title: "Person Schema",
      required: ["name"],
      properties: {
        name: {
          type: "string",
          title: "Name",
          description: "Name of the person",
        },
      },
    },
  };
  return await gatewayInstanceV3.dataModel.createDataModel(
    dataModelObject
  );
};

export const getDataModelV3 = async (dataModelId: string) => {
  return await gatewayInstanceV3.dataModel.getDataModel(dataModelId);
};

export const getDataModelsV3 = async () => {
  return await gatewayInstanceV3.dataModel.getDataModels();
};

export const getDataModelCountV3 = async () => {
  return await gatewayInstanceV3.dataModel.getDataModelsCount();
};

export const getDataModelsMetaDataV3 = async () => {
  return await gatewayInstanceV3.dataModel.getDataModelsMetaData();
};

export const getIssuersByDataModelV3 = async (dataModelId: string) => {
  await gatewayInstanceV3.dataModel.getIssuersByDataModel(dataModelId);
};

export const getTotalofIssuersByDataModelV3 = async (dataModelId: string) => {
  await gatewayInstanceV3.dataModel.getTotalofIssuersByDataModel(dataModelId);
};

export const getIssuersByDataModelCountV3 = async (dataModelId: string) => {
  await gatewayInstanceV3.dataModel.getIssuersByDataModelCount(dataModelId);
};
