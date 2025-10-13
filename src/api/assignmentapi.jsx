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

export const submitAssignment = async (workshop_id, formdata) => {
  try {
    const res = await apiClient.put(
      `assignments/submit/${workshop_id}`,
      {
        title: formdata.title,
        submit_link: formdata.submit_link,
      }
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
