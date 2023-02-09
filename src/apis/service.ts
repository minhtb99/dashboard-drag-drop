import axios from "axios";
import { ISensor } from "../interface/interface";


axios.defaults.baseURL = "https://exam-express.vercel.app/api";

export async function getSensors(): Promise<ISensor[] | undefined> {
  try {
    const response = await axios.get("/sensors");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
