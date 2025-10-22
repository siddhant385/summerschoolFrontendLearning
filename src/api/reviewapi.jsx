import apiClient from "./apiClient";



export const getMyReviews = async () => {
  try {
    const res = await apiClient.get("/reviews/my-reviews"); // assuming this is your route
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};



export const submitReview = async (workshop_id, formdata) => {
  try {
    const res = await apiClient.post(
      `/reviews/`,
      {
        "rating": formdata.rating,
        "review_description": formdata.review_description,
        "workshop_id": formdata.workshop_id
      }

    );
    console.log(formdata)
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


export const updateReview = async (review_id, formdata) => {
  try {
    const res = await apiClient.put(
      `reviews/${review_id}`,
      {
        "rating": formdata.rating,
        "review_description": formdata.review_description
      }
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
