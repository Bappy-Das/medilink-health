import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
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


    // get input email
    const handleEmailChange = e => {
        setEmail(e.target.value)

    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    // const handleNameChange = e => {
    //     setPassword(e.target.value)
    // }
    const handleRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // setUser(result.user)
                // console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })

        e.preventDefault();
    }
    const handlePasswordLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const updateName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {

            }).catch((error) => {

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])

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
        signInWithFacebook,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handlePasswordLogIn,
        updateName
    }
};

export default useFirebase;