import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000", 
});
api.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  if(token) config.headers.Authorization=`Bearer ${token}`;
  return config;
});
const createItem = async (formData) => {
  try {
    const response = await api.post("/api/items/lost-found", formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};
const getCategories = async ()=>{
  const res = await api.get("/api/items/getCategories");
  return res.data.data;
};
const getLocations = async ()=>{
  const res = await api.get("/api/items/locations");
  return res.data.data;
}
export default {createItem,getCategories,getLocations};