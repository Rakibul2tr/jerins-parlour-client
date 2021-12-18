import firebaseConfig from "./Firebase.config"
import { initializeApp } from "firebase/app";

const FirebaseInisalize=()=>{
    initializeApp(firebaseConfig)
}

export default FirebaseInisalize;