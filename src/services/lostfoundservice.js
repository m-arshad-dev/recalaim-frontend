import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // if auth required
  },
});
export const addItem = (data, type) => {
  const route = type === "lost" ? "/lost" : "/found";
  return API.post(route, data);
};