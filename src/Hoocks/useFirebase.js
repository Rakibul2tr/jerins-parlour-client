import FirebaseInisalize from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

    FirebaseInisalize()
const useFirebase=()=>{
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const [ user,setuser]=useState([])
    const [services,setservices]=useState([]);

    //register sign in
    const registerUser=(email,password,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
     }
     //login email password
        const LoginUser=(email,password)=>{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
           }

           //observe aouth change
            useEffect(()=>{
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      setuser(user)
                    } else {
                        setuser({})
                    }
                  });
            },[])


            ///google login ============

            const googlelogin=()=>{
                signInWithPopup(auth, googleprovider)
                    .then((result) => {
                        const user = result.user;
                    }).catch((error) => {
                        const errorMessage = error.message;
                    });
            }

           //log Out =========
           const logOut=()=>{
            signOut(auth).then(() => {
                setuser({})
              }).catch((error) => {
                // An error happened.
              });
           }

           //service data
    
        useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setservices(data))
        
    },[])

     return {
            user,
            registerUser,
            LoginUser,
            logOut,
            googlelogin,
            services

     }
}

export default useFirebase;