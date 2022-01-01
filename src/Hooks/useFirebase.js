import firebaseInit from "../Firebase/firebaseInit";
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";

firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {

  
   
    const googleSignIn = () => {

        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
           
        }).catch((error) => {
        });
    }
    const createAccount = (email, pass) => {
      
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const emailLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               
               
            } else {
              
            }
        });
    }, [user])

    return {
        googleSignIn,
        logOut,
        createAccount,
        emailLogin,
        updateProfile,
        auth,
    }
};

export default useFirebase;