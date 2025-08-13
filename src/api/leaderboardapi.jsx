import apiClient from "./apiClient";



export const getTopPerformers = async () => {
  try {
    const res = await apiClient.get("/leaderboard/top");
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const getLeaderboard = async (limit = 20, offset = 1, min_points = 0, time_period = "all_time") => {
  try {
    const res = await apiClient.get("/leaderboard/", {
      params: {
        limit,
        offset,
        min_points,
        time_period
      }
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

