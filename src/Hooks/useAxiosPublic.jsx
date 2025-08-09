import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://share-and-care-server.vercel.app",
});

const useAxiosPublic = () => {
    return axiosInstance;
};

export default useAxiosPublic;