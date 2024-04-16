import forge from "node-forge";

export const generateRSAKeyPair = () => {
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 4096 });
  const publicPem = forge.pki.publicKeyToPem(keypair.publicKey);
  const privatePem = forge.pki.privateKeyToPem(keypair.privateKey);

  return {
    privateKey: forge.util.encode64(privatePem),
    publicPem: forge.util.encode64(publicPem),
  };
};
