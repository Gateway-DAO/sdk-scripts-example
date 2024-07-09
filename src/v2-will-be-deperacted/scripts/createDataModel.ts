import { gatewayInstance } from "../GatewayInstance";

export async function createDataModel() {
  try {
    const { createDataModel } = await gatewayInstance.dataModel.createDataModel(
      {
        title: "Your Data Model Title",
        description: "A brief description of your data model.",
        permissions: "ALL",
        tags: ["Tag1", "Tag2"],
        schema: {
          type: "object",
          default: {},
          title: "Your Data Model Title",
          required: ["field1", "field2", "field3"],
          properties: {
            field1: {
              type: "string",
              title: "Field 1",
            },
            field2: {
              type: "number",
              title: "Field 2",
              default: 0,
            },
            field3: {
              type: "boolean",
              title: "Field 3",
              default: false,
            },
          },
        },
      }
    );

    console.log("Data model created:", createDataModel);

    console.log("Your Data model ID:", createDataModel.id);
    return createDataModel;
  } catch (error) {
    console.error("Error creating data model:", error);
    throw error;
  }
}
