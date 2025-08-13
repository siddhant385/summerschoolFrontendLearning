import apiClient from "./apiClient";

export const getMyWorkshops = async () => {
  try {
    const res = await apiClient.get("/user-workshop/user/workshops");
    return res.data.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
