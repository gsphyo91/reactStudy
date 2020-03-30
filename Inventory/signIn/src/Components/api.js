import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const requestAPI = {
  signIn: (email, password) =>
    api.post("/signIn", {
      headers: {
        email,
        password
      }
    })
};
