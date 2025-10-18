import apiClient from "./apiClient";

/**
 * Fetch workshops with optional filters.
 * @param {Object} filters - Optional filter object
 * @param {string} filters.search - Search by title
 * @param {string} filters.technology - Filter by technology
 * @param {string} filters.instructor - Filter by instructor
 * @param {boolean} filters.is_upcoming - Filter upcoming workshops
 * @param {number} filters.page - Pagination page number
 * @param {number} filters.page_size - Number of items per page
 */
export const getWorkshops = async (filters = {}) => {
  try {
    const params = {};

    if (filters.search) params.search = filters.search;
    if (filters.technology) params.technology = filters.technology;
    if (filters.instructor) params.instructor = filters.instructor;
    if (filters.is_upcoming !== undefined) params.is_upcoming = filters.is_upcoming;
    if (filters.page) params.page = filters.page;
    if (filters.page_size) params.page_size = filters.page_size;

    const res = await apiClient.get("/workshops/", { params });
    return res.data.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


export const getWorkshopsStats = async () => {
  try {
    const res = await apiClient.get("/workshops/stats");
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


export const getUpcomingWorkshops = async (limit) => {
  try {
    const res = await apiClient.get(`/workshops/upcoming?limit=${limit}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const getWorkshopById = async (workshop_id) => {
  try{
    const res = await apiClient.get(`/workshops/${workshop_id}`);
    return res.data;
  }catch (err) {
    throw err.response?.data || err.message;
  }
};