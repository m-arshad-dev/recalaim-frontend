import axios from "../../services/apiClient";

export const getUserProfile = async () => {
  const { data } = await axios.get("/users/me");
  return data;
};

export const updateUserProfile = async (payload) => {
  const { data } = await axios.patch("/users/me", payload);
  return data;
};