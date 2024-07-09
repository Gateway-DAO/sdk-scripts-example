import {
  MemberInput,
  OrganizationBody,
  UpdateOrganizationBody,
} from "@gateway-dao/sdk";
import { gatewayInstanceV3 } from "../GatewayInstance";

export const createOrganizationV3 = async () => {
  let orgBody: OrganizationBody = {
    name: "Create sample organization",
    description: "Sample organization description",
    username: "Sample organization username",
  };

  return await gatewayInstanceV3.organization.createOrganization(orgBody);
};

export const addMemberToOrganizationV3 = async (organizationDID: string) => {
  let memberObjectBody: MemberInput = {
    organization: { type: "ORG_DID", value: organizationDID },
    user: { type: "USERNAME", value: "sid" },
    role: "MEMBER",
  };

  return await gatewayInstanceV3.organization.addMemberToOrganization(
    memberObjectBody
  );
};

export const changeMemberRoleOrganizationV3 = async (
  organizationDID: string
) => {
  let memberObjectBody: MemberInput = {
    organization: { type: "ORG_DID", value: organizationDID },
    user: { type: "USERNAME", value: "sid" },
    role: "ADMIN",
  };

  return await gatewayInstanceV3.organization.changeMemberRole(
    memberObjectBody
  );
};

export const updateOrganizationV3 = async (organizationDID: string) => {
  let updateOrgBody: UpdateOrganizationBody = {
    did: organizationDID,
    description: "updated description",
  };

  return await gatewayInstanceV3.organization.updateOrganization(updateOrgBody);
};

export const getOrganization = async (organizationDID: string) => {
  return await gatewayInstanceV3.organization.getOrganization(
    "ORG_DID",
    organizationDID
  );
};
