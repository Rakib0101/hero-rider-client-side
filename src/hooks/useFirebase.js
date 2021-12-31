import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();
const useFirebase = () => {
    const auth = getAuth();
    const [userName, setUserName] = useState(" ");
    const [userEmail, setUserEmail] = useState(" ");
    const [userPassword, setUserPassword] = useState(" ");
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);
    const [isLogin, setIsLogin] = useState(true);

    const getName = (e) => {
        setUserName(e.target.value);
    };
    const getEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const getPassword = (e) => {
        setUserPassword(e.target.value);
    };
    
    const registerWithEmailAndPass = () => {
        return createUserWithEmailAndPassword(
            auth,
            userEmail,
            userPassword,
            userName
        );
    };
    const handleEmailAndPassword = () => {
        return signInWithEmailAndPassword(auth, userEmail, userPassword);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLogin(false);
        });
    }, [auth]);

    useEffect(() => {
        fetch(`https://still-shelf-07747.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
        setIsLogin(true);
    };
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://still-shelf-07747.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };
    const handleUpdateUserName = () => {
        updateProfile(auth?.currentUser, {
            displayName: userName,
        })
            .then(() => {})
            .catch((err) => {
                setError(err);
            });
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLogin(false);
        });
        return () => unsubscribed;
    }, []);
    return {
        handleEmailAndPassword,
        registerWithEmailAndPass,
        getName,
        getEmail,
        getPassword,
        handleUpdateUserName,
        setIsLogin,
        setError,
        setUser,
        logOut,
        userName,
        user,
        admin,
        error,
        saveUser,
        isLogin,
    };
};

export default useFirebase;
