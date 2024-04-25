import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVB0EGWv9bBmaXq9GdiB94YN6FbKCQd2c",
  authDomain: "chat-en-tiempo-real-498d9.firebaseapp.com",
  projectId: "chat-en-tiempo-real-498d9",
  storageBucket: "chat-en-tiempo-real-498d9.appspot.com",
  messagingSenderId: "311339893134",
  appId: "1:311339893134:web:264a4b1b8a10a01c2264df",
  measurementId: "G-8HHSLV5GQK"
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

export const auth = getAuth(app)