
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDkt4AGxQA31ZyxaKxCYm3pg7nXfRvBVv0",
  authDomain: "remainder-app-7a827.firebaseapp.com",
  projectId: "remainder-app-7a827",
  storageBucket: "remainder-app-7a827.appspot.com",
  messagingSenderId: "112657097892",
  appId: "1:112657097892:web:902e35500d6854e0287231"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getDatabase(app)

export {app ,auth};