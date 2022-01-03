import firebaseInit from "../Firebase/firebaseInit";
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";
import { addUserAuth } from "../redux/slices/userSlices";
import { useDispatch } from "react-redux";

firebaseInit()
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const googleSignIn = () => {

        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(addUserAuth([]))
        }).catch((error) => {
        });
    }
    const createAccount = (email, pass) => {

        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const emailLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUserAuth(user))
            } else {
                dispatch(addUserAuth([]))
            }
        });
    }, [])

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