import { createDataRequestTemplate } from "./scripts";
import { createPDA } from "./scripts";

async function main() {
  try {
    // Call the functions
    createPDA();

    createDataRequestTemplate();
  } catch (error) {
    console.log(error); // Can log it for degugging
  }
}

main();
