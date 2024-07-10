import { OrganizationIdentifierType } from "@gateway-dao/gateway-sdk-legacy";
import { gatewayInstance } from "../GatewayInstance";

export async function createOrganization() {
  const { createOrganization } =
    await gatewayInstance.organization.createOrganization({
      name: "Create sample organization",
      description: "Sample organization description",
      username: "sampleorganization01",
    });
  console.log(createOrganization);
}

export async function addMemberToOrganization() {
  const { addMemberToOrganization } =
    await gatewayInstance.organization.addMemberToOrganization({
      organization: { type: "GATEWAY_ID", value: "org-gateway-id" },
      user: { type: "GATEWAY_ID", value: "user-gateway-id" },
      role: "Member",
    });
  console.log(addMemberToOrganization);
}

export async function changeMemberRole() {
  const { changeMemberRole } =
    await gatewayInstance.organization.changeMemberRole({
      organization: { type: "GATEWAY_ID", value: "org-gateway-id" },
      user: { type: "GATEWAY_ID", value: "user-gateway-id" },
      role: "Admin",
    });
  console.log(changeMemberRole);
}

export async function removeMemberFromOrganization() {
  const { removeMemberFromOrganization } =
    await gatewayInstance.organization.removeMemberFromOrganization({
      organization: { type: "GATEWAY_ID", value: "org-gateway-id" },
      user: { type: "GATEWAY_ID", value: "user-gateway-id" },
    });
  console.log(removeMemberFromOrganization);
}

export async function updateOrganization() {
  // update fields you want
  const { updateOrganization } =
    await gatewayInstance.organization.updateOrganization({
      id: "your-org-id",
      description: "updated description",
    });
  console.log(updateOrganization);
}

export async function getOrganization() {
  const { organization } = await gatewayInstance.organization.getOrganization(
    OrganizationIdentifierType.GATEWAY_ID,
    "your-org-id"
  );
  console.log(organization);
}
