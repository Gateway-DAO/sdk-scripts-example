import {
  changePDASatus,
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

// NOTE: WE HAVE ONLY IMPLEMENTED IMPORTANT CRUD METHODS. AUTH AND USER ARE NOT IMPLEMENTED.
async function main() {
  try {
    // --------- PDA ---------
    // await createPDA();
    // await updatePDA();
    // await changePDASatus();
    await getPDA();

    // --------- DATA REQUEST TEMPLATE ---------
    await createDataRequestTemplate();
    await getDataRequestTemplate();
    // --------- DATA REQUEST TEMPLATE ---------
    await createOrganization();
    await addMemberToOrganization();
    await changeMemberRole();
    await removeMemberFromOrganization();
    await updateOrganization();
    await getOrganization();
    await createDataRequestTemplate();
  } catch (error) {
    console.log(error);
  }
}

main();
