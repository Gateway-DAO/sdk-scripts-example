import { PDAStatusV3 } from "@gateway-dao/sdk/dist/src/types";
import {
  changePDAStatusV3,
  createPDAV3,
  getPDAV3,
  updatePDAV3,
} from "./scripts/PDA";

const main = async () => {
  try {
    const { createPDA } = await createPDAV3();
    await updatePDAV3(createPDA.id);
    await changePDAStatusV3(createPDA.id, PDAStatusV3.EXPIRED);
    await getPDAV3(createPDA.id);

  } catch (error) {
    console.log(error);
  }
};

main();
