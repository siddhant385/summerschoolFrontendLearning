import apiClient from "./apiClient";

export const getWorkshops = async () => {
  try {
    const res = await apiClient.get("/workshops");
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
