import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAxios from '../hooks/useAxios';
export const AuthContextInfo = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const useAxiosSecure = useAxios()
    const Provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, Provider)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
            const userEmail = { email: curentUser?.email || user?.email }
            const loogedInuser = { email: userEmail.email }
            setUser(curentUser)
            setLoading(false)
            if (curentUser) {
                useAxiosSecure.post("/jsonwebtoken", loogedInuser)
                    .then()
                    .catch();
            } else {
                useAxiosSecure.post("/logout", loogedInuser)
            }
        })
        return () => {
            return unsubscribe
        }
    }, [useAxiosSecure])
    const userInfo = {
        user, signUp, loading, logOut, logIn, loginWithGoogle
    }
    return <AuthContextInfo.Provider value={userInfo}>
        {children}
    </AuthContextInfo.Provider>
};
export default AuthProvider;