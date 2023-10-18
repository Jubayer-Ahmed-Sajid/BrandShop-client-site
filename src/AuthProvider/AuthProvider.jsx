import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types'

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const googleAuth = new GoogleAuthProvider

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const createUser = (email, password, url, name) => {
        return createUserWithEmailAndPassword(auth, email, password, url, name)
    }
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleAuth)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signingOut = () => {
        return signOut(auth)
    }
    const AuthInfo = { user, createUser, signUpWithGoogle, signIn,signingOut }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged((auth), currentUSer =>{
            setUser(currentUSer)
        })
       return ()=>{
        unSubscribe()
        }
    })


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;