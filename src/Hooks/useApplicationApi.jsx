import React from "react";
import useAxiosSecure from "./useAxiosSecure";


const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();

  const myAddedFoodsPromise = (uid)=>{
    return axiosSecure.get(`/myAddedFoods?uid=${uid}`);
  }

  const myRequestedFoodsPromise = (uid) => {
    return axiosSecure.get(`/foodRequest/${uid}`);
  };

  return {
    myRequestedFoodsPromise,
    myAddedFoodsPromise,
  };
};

export default useApplicationApi;
