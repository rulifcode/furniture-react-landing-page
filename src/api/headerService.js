import axiosInstance from "./axiosInstance";

export const getHeader = async () => {
    const response = await axiosInstance.get("/header");
    return response.data;
};
