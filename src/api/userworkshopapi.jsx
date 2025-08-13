import apiClient from "./apiClient";

export const getMyWorkshops = async () => {
  try {
    const res = await apiClient.get("/user-workshop/user/workshops");
    return res.data.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const UserWorkShopRegister = async (profileData) => {
  try {
    const res = await apiClient.post("/user-workshop/register/registered-user", profileData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};


export const GuestWorkShopRegister = async (profileData) => {
  try {
    const res = await apiClient.post(
      "/user-workshop/register/guest",
      {
        name: profileData.name,
        email: profileData.email,
        workshop_id: profileData.workshop_id
      }, // body
      {
        params: {
          name: profileData.name,
          email: profileData.email,
          workshop_id: profileData.workshop_id
        },
      }
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};




