import forge from "node-forge";

export const generateDID = (publicKey: string) => {
  const sha256 = forge.md.sha256.create();
  sha256.update(publicKey, "utf8");

  return `did:gatewayId:${sha256.digest().toHex()}`;
};
