import { gatewayInstance } from "../GatewayInstance";

export async function createOrganization() {
  const {} = await gatewayInstance.organization.createOrganization({
    name: "Create sample organization",
    description: "Sample organization description",
    username: "sampleorganization01",
  });
}
