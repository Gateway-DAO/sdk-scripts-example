import { PDAStatus } from "@gateway-dao/sdk";
import {
  changePDAStatusV3,
  createFilePDAV3,
  createPDAV3,
  getPDASV3,
  getPDAV3,
  updatePDAV3,
} from "./scripts/PDA";
import {
  createDataModelV3,
  getDataModelCountV3,
  getDataModelV3,
  getDataModelsMetaDataV3,
  getDataModelsV3,
  getIssuersByDataModelCountV3,
  getIssuersByDataModelV3,
  getTotalofIssuersByDataModelV3,
} from "./scripts/DataModel";
import {
  createOrganizationV3,
  addMemberToOrganizationV3,
  changeMemberRoleOrganizationV3,
  getOrganization,
  updateOrganizationV3,
} from "./scripts/Organization";
import {
  getActivitiesCountV3,
  getActivitiesV3,
  getActivityV3,
} from "./scripts/Activities";
import { createProofV3 } from "./scripts/Proof";
import {
  createDataRequestV3,
  getDataRequestCountV3,
  getDataRequestStatusV3,
  getDataRequestV3,
  getDataRequestsV3,
  getRequestsReceivedV3,
  getRequestsSentV3,
} from "../v3-testnet/scripts/DataRequest";

const main = async () => {
  try {
    // --------- AUTH ---------

    // --------- PDA ---------
    const { createPDA } = await createPDAV3();
    // await updatePDAV3(createPDA.id, "updated title", "updated description", {
    //   name: "updated",
    // });
    // await changePDAStatusV3(createPDA.id, PDAStatus.EXPIRED);
    // await getPDAV3(createPDA.id);
    // await getPDASV3();
    // await createFilePDAV3();

    // --------- DATA MODEL ---------
    // const { createDataModel } = await createDataModelV3();
    // await getDataModelCountV3();
    // await getDataModelV3(createDataModel.id);
    // await getDataModelsMetaDataV3();
    // await getDataModelsV3();
    // await getIssuersByDataModelCountV3(createDataModel.id);
    // await getIssuersByDataModelV3(createDataModel.id);
    // await getTotalofIssuersByDataModelV3(createDataModel.id);

    // --------- ORGANISATION ---------
    // const { createOrganization } = await createOrganizationV3();
    // await addMemberToOrganizationV3(createOrganization.did);
    // await changeMemberRoleOrganizationV3(createOrganization.did);
    // await getOrganization(createOrganization.did);
    // await updateOrganizationV3(createOrganization.did);

    // --------- DATA REQUEST---------------
    // const { createDataRequest } = await createDataRequestV3(createDataModel.id);
    // await getDataRequestCountV3();
    // await getDataRequestStatusV3(createDataRequest.id);
    // await getDataRequestV3(createDataRequest.id);
    // await getDataRequestsV3();
    // await getRequestsReceivedV3();
    // await getRequestsSentV3();

    // -------- PROOF ------------------
    // await createProofV3(createPDA.id, createPDA.cipher!.keyBlob!);

    // -------- Activities ------------------
    // await getActivitiesV3();
    // await getActivityV3("some-random-id");
    // await getActivitiesCountV3();
  } catch (error) {
    console.log(error);
  }
};

main();
