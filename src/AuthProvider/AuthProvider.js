import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    //signup account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login account
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google login
    const googleProvider = new GoogleAuthProvider();
    const loginGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    //sign out 
    const logOut = () =>{
        setLoading(true);
        localStorage.removeItem('review-project');
        return signOut(auth);
    }
    //profile updata
    const profileUpdate=(name)=>{
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        logOut,
        login,
        createUser,
        profileUpdate,
        loginGoogle

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;