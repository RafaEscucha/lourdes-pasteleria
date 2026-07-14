import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyALJAJo_N7C2NX5CxsLSTRI298ESuAqigI",
    authDomain: "lourdes-pasteleria-reactjs.firebaseapp.com",
    projectId: "lourdes-pasteleria-reactjs",
    storageBucket: "lourdes-pasteleria-reactjs.firebasestorage.app",
    messagingSenderId: "513743142243",
    appId: "1:513743142243:web:d2afc112fa1a1101276756"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)