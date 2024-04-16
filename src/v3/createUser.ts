import axios from "axios";
import dotenv from "dotenv";
import { generateRSAKeyPair } from "./utils/generateRSAKeyPair";
import { generateDID } from "./utils/generateDID";
dotenv.config();

const createUserNonceMutation = (data: any) => ({
  query: `mutation createWalletNonce($signingKey:String!,$encryptionKey:String!,$did:String!) {
  createUserNonce(input: {
    signingKey: $signingKey,
    encryptionKey: $encryptionKey,
    did:$did
  }) 
}`,
  variables: {
    signingKey: data.signingKey,
    encryptionKey: data.encryptionKey,
  },
});

const createUserMutation = (data: any) => ({
  query: `mutation createUser($signingKey:String!,$signature:String!) {
  createUser(signature:$signature,
  signingKey:$signingKey)
} `,
  variables: {
    signature: data.signature,
    signingKey: data.signingKey,
  },
});

const CREATE_USER_NONCE_BODY = {
  signingKey: "your-wallet",
};

const CREATE_USER_BODY = {
  signingKey: "your-wallet",
};

export const createUserNonce = async () => {
  try {
    // MAKE SURE TO GENERATE PRIVATE KEY AND PUBLIC PEM AND STORE BOTH OF THESE
    // ELSE YOU WONT BE ABLE TO DECRYPT YOUR DATA!
    const { publicPem, privateKey } = generateRSAKeyPair();

    const did = generateDID(publicPem);

    const { data } = await axios.post(
      process.env.PROTOCOL_V3_ENDPOINT!,
      JSON.stringify(
        createUserNonceMutation({
          ...CREATE_USER_NONCE_BODY,
          encryptionKey: publicPem,
          did,
        })
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data.data.createUserNonce);
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const createUser = async () => {
  try {
    // RUN THE ABOVE FUNCTION FIRST AND THEN SIGN IN USING YOUR WALLET WITH THE MESSAGE
    // AND PASTE THE SIGNATURE HERE TO GET JWT TOKEN
    const { data } = await axios.post(
      process.env.PROTOCOL_V3_ENDPOINT!,
      JSON.stringify(
        createUserMutation({
          ...CREATE_USER_BODY,
          signature: "",
        })
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data);
  }
};
