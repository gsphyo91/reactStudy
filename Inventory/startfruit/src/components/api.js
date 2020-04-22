import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const requestAPI = {
  meeting: (title) =>
    api.post("/meeting", {
      headers: {
        title
      }
    })
};
