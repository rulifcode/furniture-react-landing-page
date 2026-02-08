import axiosInstance from "./axiosInstance";

export const getStats = async () => {
  const res = await axiosInstance.get("/data");
  return res.data;
};
