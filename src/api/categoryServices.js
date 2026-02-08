import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
  const response = await axiosInstance.get("/category");
  return response.data.category;
};
