import { gatewayInstance } from "../GatewayInstance";

export async function createDataRequestTemplate() {
  const { createDataRequestTemplate } =
    await gatewayInstance.dataRequestTemplate.createDataRequestTemplate({
      title: "Create Data Request Template Example",
      description: "Lorem ipsum dolor sit amet.",
      dataModels: [
        {
          id: "9f27397e-27f2-4c30-b1b7-829371de4df5",
          required: true,
          claimValidations: {
            type: "object",
            properties: {
              handleName: {
                type: "string",
              },
              favoritePosts: {
                type: "array",
              },
            },
            required: ["handleName", "favoritePosts"],
          },
        },
      ],
    });
  console.log(createDataRequestTemplate);
}

export async function getDataRequestTemplate() {
  const { dataRequestTemplate } =
    await gatewayInstance.dataRequestTemplate.getDataRequestTemplate(
      "exisiting-id-of-your-template"
    );
  console.log(dataRequestTemplate);
}
