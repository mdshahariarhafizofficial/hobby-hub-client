import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { signOut } from "firebase/auth";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Get Current User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // Update user Profile
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    
    // Sing out
    const handleSingOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(() => {})
    }


    // Context Data
    const userInfo = {
        createUser,
        user,
        updateUserProfile,
        handleSingOut
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;