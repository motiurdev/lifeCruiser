import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

// initialize firebase
initializeFirebase()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, displayName, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName }
                setUser(newUser)
                saveUser(email, displayName, "POST")
                setAuthError("")
                navigate("/")

                updateProfile(auth.currentUser, {
                    displayName: displayName,
                }).then(() => {
                    // setAuthError("")

                }).catch((error) => {
                    // setAuthError(error.message)
                });
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("")
                const destination = location?.state?.from || "/"
                navigate(destination)
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
                saveUser(user.email, user.displayName, "PUT")
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribe;
    }, [])


    const saveUser = (email, displayName, method) => {
        const users = { email, displayName }
        fetch("https://warm-meadow-50946.herokuapp.com/users", {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://warm-meadow-50946.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    return {
        user,
        registerUser,
        loginUser,
        logOut,
        authError,
        admin,
        isLoading,
        signInWithGoogle
    }
}

export default useFirebase;