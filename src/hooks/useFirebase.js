import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user)
            })

    }
    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])

    // const createAccount = () => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        error,
        user,
        singInUsingGoogle,
        logOut,
        signInWithFacebook
    }
};

export default useFirebase;