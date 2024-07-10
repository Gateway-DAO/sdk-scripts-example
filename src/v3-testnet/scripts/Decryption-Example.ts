import { Gateway } from "@gateway-dao/sdk";

const main = async () => {
  const gatewayInstance = new Gateway({
    apiKey: "",
    token: "",
    url: "",
    logging: true,
    walletPrivateKey: "",
  });
  // gatewayInstance.auth.createUserNonce({});
};

main();
