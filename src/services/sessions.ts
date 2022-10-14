import axios from "axios";
import { SERVICES } from "constants/services";

interface ISignIn {
  email: string;
  password: string;
}

export const signin = async (data: ISignIn) => {
  try {
    const res = await axios.post(SERVICES.SESSIONS, data);
    return res.data;
  } catch (err: any) {
    return false;
  }
};
