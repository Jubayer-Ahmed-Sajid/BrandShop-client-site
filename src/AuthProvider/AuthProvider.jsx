import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types'

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const googleAuth = new GoogleAuthProvider

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading,setLoading] = useState(true)

    const createUser = (email, password, url, name) => {
         setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, url, name)
    }
    const signUpWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signingOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const AuthInfo = { user, createUser, signUpWithGoogle, signIn,signingOut,loading }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged((auth), currentUSer =>{
            setUser(currentUSer);
            setLoading(false)
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