import {
  changePDASatus,
  createDataRequestTemplate,
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

// NOTE: WE HAVE ONLY IMPLEMENTED IMPORTANT CRUD METHODS. AUTH AND USER ARE NOT IMPLEMENTED.
async function main() {
  try {
    // --------- PDA ---------
    createPDA();
    updatePDA();
    changePDASatus();
    getPDA();

    // --------- DATA REQUEST TEMPLATE ---------
    createDataRequestTemplate();
    getDataRequestTemplate();

    // --------- DATA REQUEST TEMPLATE ---------
    createOrganization();
    addMemberToOrganization();
    changeMemberRole();
    removeMemberFromOrganization();
    updateOrganization();
    getOrganization();
  } catch (error) {
    console.log(error);
  }
}

main();
