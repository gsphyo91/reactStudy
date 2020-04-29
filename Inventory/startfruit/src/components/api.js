import axios from "axios";
import {BASE_URL} from "../config/url";

const api = axios.create({
  baseURL: BASE_URL
});

export const requestAPI = {
  meeting: (title) =>
    api.post("/meeting", {
      headers: {
        title
      }
    })
};
