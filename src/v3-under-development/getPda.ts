import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getPDASQuery = () => ({
  query: `query pdas{
  PDAs{
    id
  }
}`,
});

export const getPDAS = async () => {
  try {
    const { data } = await axios.post(
      process.env.PROTOCOL_V3_ENDPOINT!,
      JSON.stringify(getPDASQuery()),
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.V3_API_KEY as string,
          Authorization: `Bearer ${process.env.V3_TOKEN as string}`,
        },
      }
    );
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
