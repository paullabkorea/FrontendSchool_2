import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9Wz6rXaDoETDezM9hGPapUV9HZAmwExE",
    authDomain: "my-diary-65ebd.firebaseapp.com",
    projectId: "my-diary-65ebd",
    storageBucket: "my-diary-65ebd.appspot.com",
    messagingSenderId: "305436240401",
    appId: "1:305436240401:web:33f1cb9bd33c59337ddfb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 파이어스토어 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

// 타임스탬프
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp }