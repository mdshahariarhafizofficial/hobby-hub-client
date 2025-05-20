import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Get Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Update user Profile
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

//   Sing In with google
  const googleProvider = new GoogleAuthProvider();
  const singInWithGoogle = () => {
    setLoading(true)
    return  signInWithPopup(auth, googleProvider)
  }

  // Sing in user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sing out
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Log Out Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {});
  };

  // Context Data
  const userInfo = {
    createUser,
    user,
    updateUserProfile,
    loginUser,
    handleSingOut,
    setUser,
    singInWithGoogle,
    loading, 
    setLoading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
