import axios from "axios";
import cbor from "cbor";
import dotenv from "dotenv";
dotenv.config();

const createPDAMutation = (body: any) => ({
  query: `mutation createPDA($signature:String!,$signingKey:String!,$title:String!,$description:String!,$owner:String!,$dataModelId:String!,$image:String!,$claim:JSON!){
  createPDA(input: {signingKey: $signingKey
            signature: $signature
            data: {
                title: $title
                description: $description
                owner: {
                    type: EVM
                    value: $owner
                }
                dataModelId: $dataModelId
                image: $image
                expirationDate: null
                claim: $claim
            }
        }
  )
  {
    id
    
  }
}`,
  variables: {
    title: body.title,
    description: body.description,
    organization: process.env.ORG_GATEWAY_ID,
    owner: body.owner,
    dataModelId: body.dataModelId,
    claim: body.claim,
    image: body?.image,
    signature: body.signature,
    signingKey: body.signingKey,
  },
});

const PDA_BODY = {
  title: "Gateway Core Team Member",
  description:
    "Given to people that have had contributed to the beginning of Gateway",
  owner: "did:gatewayid:234",
  dataModelId: "225298e4-6646-47a0-ba20-0e6c46f54c74",
  image: "https://arweave.net/p_uEW7Ledg0-e4Fh2dOexqHJbau0MjO2u0EVCfbA0UI",
  claim: { name: "I plan on using Gateway for everything." },
};

export const createPDA = async () => {
  try {
    const encodedBody = cbor.encodeCanonical(PDA_BODY).toString("hex");
    console.log("PDA BODY ENCODED USING CBOR ", encodedBody);

    // USE THE ABOVE ENCODED BODY AND SIGN IT USING WALLET
    // AND THEN PASS IT AS THE SIGNATURE TO CREATE PDA QUERY

    const { data } = await axios.post(
      process.env.PROTOCOL_V3_ENDPOINT!,
      JSON.stringify(
        createPDAMutation({
          ...PDA_BODY,
          signature:
            "",
          signingKey: "",
        })
      ),
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.V3_API_KEY as string,
          Authorization: `Bearer ${process.env.V3_TOKEN as string}`,
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data);
  }
};
