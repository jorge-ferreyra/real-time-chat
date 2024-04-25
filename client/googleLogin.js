import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "./firebase.js"

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)

  } catch (e) {
    console.error(e)
  }
})