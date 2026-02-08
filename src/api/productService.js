import axiosInstance from "./axiosInstance";

export const getProducts = async (page = 1, limit = 8) => {
  const response = await axiosInstance.get(
    `/products?page=${page}&limit=${limit}`
  );
  return response.data;
};
