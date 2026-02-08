import axiosInstance from "./axiosInstance";

export const subscribeNewsletter = async (email) => {
  return axiosInstance.post("/subscribe", { email });
};
