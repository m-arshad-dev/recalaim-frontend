import apiClient from "../../services/apiClient";

// Signup
export const signupUser = async (full_name, email, password) => {
  const res = await apiClient.post("/users/register", { full_name, email, password });
  console.log("from hte signup authapi" , res)
  return res.data;
};

// Login
export const loginUser = async (email, password) => {
  const res = await apiClient.post("/auth/login", { email, password });
  return res.data; // { accessToken, refreshToken }
};

// Logout
export const logoutUser = async (refreshToken) => {
  const res = await apiClient.post("/auth/logout", { refreshToken });
  return res.data;
};

// Refresh
export const refreshToken = async (refreshToken) => {
  const res = await apiClient.post("/auth/refresh", { refreshToken });
  return res.data; // { accessToken }
};

// Profile
export const getProfile = async () => {
  const res = await apiClient.get("/users/me");
  return res.data;
};

export const updateProfile = async (userData) => {
  const res = await apiClient.patch("/users/me", userData);
  return res.data;
};

// Email Verification
export const verifyEmail = async (token) => {
  const res = await apiClient.post("/auth/verify-email", { token });
  return res.data;
};

// Forgot / Reset password
export const forgotPassword = async (email) => {
  const res = await apiClient.post("/auth/forgot-password", { email });
  return res.data;
};

export const resetPassword = async (token, newPassword) => {
  const res = await apiClient.post("/auth/reset-password", { token, newPassword });
  return res.data;
};