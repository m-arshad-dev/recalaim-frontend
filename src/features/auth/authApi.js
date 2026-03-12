import apiClient from "../../services/apiClient";

export const loginUser = async (email , password) =>{
    const res = await apiClient.post("/auth/login", {email , password});
    return res.data;
}

export const signupUser = async(name , email , password)=>{
    const res = await apiClient.post("/auth/signup", {name , email , password});
    return res.data;
}

export const getProfile = async()=>{
    const res = await apiClient.get("/user/me");
    return res.data;
}