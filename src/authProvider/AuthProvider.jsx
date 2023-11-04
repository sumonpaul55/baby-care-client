import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContextInfo = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // login 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser)
            setLoading(false)
            // const email = curentUser?.email;
            // console.log(email)
            // if (curentUser?.email) {
            //     axios.post("/jsonwebtoken", { email })
            // }
        })
        return () => {
            return unsubscribe
        }
    }, [])



    const userInfo = {
        user, signUp, loading, logOut, logIn
    }

    return <AuthContextInfo.Provider value={userInfo}>
        {children}
    </AuthContextInfo.Provider>
};

export default AuthProvider;