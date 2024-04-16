import axios from "axios";
import cbor from "cbor";

const createPDAMutation = (body: any) => ({
  query: `mutation createPDA{
  createPDA(input: {signingKey: $signingKey
            signature: $signature
            data: {
                title: $title
                description: $description
                owner: {
                    type: EVM
                    value: $owner
                }
                organization: {
                	type: GATEWAY_ID
                	value: $organization
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
    owner: body.address,
    dataModelId: process.env.DATA_MODEL_ID,
    claim: body.claim,
    image: body?.image,
  },
});

const PDA_BODY = {
  signingKey: "",
  title: "Gateway Core Team Member",
  description:
    "Given to people that have had contributed to the beginning of Gateway",
  owner: {
    type: "USER_DID",
    value: "did:gatewayid:234",
  },
  dataModelId: "10a2d86c-b2f4-4af3-8882-ea0ea32c72d2",
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
      JSON.stringify(createPDAMutation({ ...PDA_BODY, signature: "" })),
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.API_KEY as string,
          Authorization: process.env.BEARER as string,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
