import React, { useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = ()=>{
    return signInWithPopup(auth , provider);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logOutUser = ()=>{
    return signOut(auth);
  }



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    googleLogin,
    logOutUser,

  };


  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
