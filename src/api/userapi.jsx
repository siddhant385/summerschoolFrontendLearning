// src/api/userApi.js
import apiClient from "./apiClient";


export const getMyProfile = async () => {
  try {
    const res = await apiClient.get("/users/me");
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};



export const getMyProfileStatus = async () => {
  try {
    const res = await apiClient.get("/users/me/profile/status");
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


export const updateMyProfile = async (profileData) => {
  try {
    const res = await apiClient.put("/users/me", profileData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


