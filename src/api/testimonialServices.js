import axiosInstance from "./axiosInstance";

export const getTestimonials = async (page = 1, limit = 3) => {
  const response = await axiosInstance.get(
    `/testimonials?page=${page}&limit=${limit}`
  );
  return response.data;
};
