import {
  changePDASatus,
  createDataModel,
  getAllPDAs,
  getDataRequestTemplate,
  getPDA,
  updatePDA,
} from "./scripts";
import { createPDA } from "./scripts";
import {
  addMemberToOrganization,
  changeMemberRole,
  createOrganization,
  getOrganization,
  removeMemberFromOrganization,
  updateOrganization,
} from "./scripts/Organization";

import { createDataRequestTemplate } from "./scripts";
import {
  dataRequestStatus,
  getDataRequest,
  createDataRequest,
  getDataRequests,
} from "./scripts";

import {
  getTransaction,
  getTransactions,
  getTransactionCount,
} from "./scripts";

// NOTE: WE HAVE ONLY IMPLEMENTED IMPORTANT CRUD METHODS. AUTH AND USER ARE NOT IMPLEMENTED.
// NOTE: SOON V2 WILL BE DEPERACTED KINDLY USE V3 SDK CHECK V3 EXAMPLES
async function main() {
  try {
    // --------- PDA ---------
    await createPDA();
    // await updatePDA();
    // await changePDASatus();
    // await getPDA();
    // await getAllPDAs();

    // --------- DATA MODEL ---------

    // await createDataModel();
    // // --------- DATA REQUEST TEMPLATE ---------
    // await createDataRequestTemplate();
    // await getDataRequestTemplate();
    // // --------- ORGANISATION ---------
    // await createOrganization();
    // await addMemberToOrganization();
    // await changeMemberRole();
    // await removeMemberFromOrganization();
    // await updateOrganization();
    // await getOrganization();

    // // --------- DATA REQUEST---------------
    // await dataRequestStatus();
    // await getDataRequest();
    // await createDataRequest();
    // await getDataRequests();

    // // -------- Transaction ------------------

    // await getTransaction();
    // await getTransactions();
    // await getTransactionCount();
  } catch (error) {
    console.log(error);
  }
}

main();
