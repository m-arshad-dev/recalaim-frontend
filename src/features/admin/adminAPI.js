import axios from "../../services/apiClient";

export const getAllItems = async () => {
  const { data } = await axios.get("/admin/items");
  return data;
};

export const approveItem = async (id) => {
  await axios.patch(`/admin/items/${id}/approve`);
};

export const rejectItem = async (id) => {
  await axios.patch(`/admin/items/${id}/reject`);
};