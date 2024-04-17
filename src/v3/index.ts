import { createPDA } from "./createPda";
import { createUser, createUserNonce } from "./createUser";
import { getPDAS } from "./getPda";

const main = async () => {
  try {
    // await createUserNonce();
    // await createUser();

    // await getPDAS();
    await createPDA();
  } catch (error) {
    console.log(error);
  }
};

main();
