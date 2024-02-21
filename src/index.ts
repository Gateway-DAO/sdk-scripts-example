import { createDataRequestTemplate } from "./scripts";
import { createPDA } from "./scripts";
import { createOrganization } from "./scripts/createOrganization";

async function main() {
  try {
    createPDA();

    // createDataRequestTemplate();
    // createOrganization();
  } catch (error) {
    console.log(error);
  }
}

main();
