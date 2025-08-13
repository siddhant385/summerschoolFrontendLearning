import apiClient from "./apiClient";

export const getMyAssignments = async (limit = 20, offset = 0) => {
  try {
    const res = await apiClient.get(
      `/assignments/user/my-assignments?limit=${limit}&offset=${offset}`
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};