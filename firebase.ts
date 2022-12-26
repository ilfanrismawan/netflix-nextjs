// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbVOrR0lRVrJGWlKEw5p9p91HSbVoWH7E",
    authDomain: "netflixjs-a944b.firebaseapp.com",
    projectId: "netflixjs-a944b",
    storageBucket: "netflixjs-a944b.appspot.com",
    messagingSenderId: "143363779487",
    appId: "1:143363779487:web:9a88656fe200a082b52baa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }