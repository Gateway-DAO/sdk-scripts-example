import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getPDASQuery = () => ({
  query: `query pdas{
  PDAs{
    id
    
  }
}`,
  variables: {},
});

export const getPDAS = async () => {
  try {
    const { data } = await axios.post(
      process.env.PROTOCOL_V3_ENDPOINT!,
      JSON.stringify(getPDASQuery),
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
