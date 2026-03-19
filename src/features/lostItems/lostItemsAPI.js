import axios from "../../services/apiClient";

export const getLostItems = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const { data } = await axios.get(`/items/lost?${params}`);
  return data;
};

export const createLostItem = async (item) => {
  const formData = new FormData();
  for (const key in item) formData.append(key, item[key]);
  const { data } = await axios.post("/items/lost", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return data;
};
export const getFoundItems = async () => {
  const { data } = await axios.get("/items/found");
  return data;
};

export const createFoundItem = async (item) => {
  const { data } = await axios.post("/items/found", item);
  return data;
};

export const createClaim = async (claim) => {
  const { data } = await axios.post("/claims", claim);
  return data;
};

export const getClaims = async () => {
  const { data } = await axios.get("/claims");
  return data;
};