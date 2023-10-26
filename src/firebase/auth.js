import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { app } from './firebaseApp'
import triggerAlert from '../components/shared/triggerAlert'

const auth = getAuth(app)

connectAuthEmulator(auth, 'http://127.0.0.1:9099')

const signInFn = async (email, password, check = false) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    // Log detailed error, make switch case here
    console.log(error.code)
    if (!check) triggerAlert(undefined, error.code)
    // specific use case for signup checking
    if (error.code == 'auth/wrong-password' && check) return true
  }
}

const signUpFn = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.log(error.code)
    triggerAlert(undefined, error.code)
  }
}
/* You dont need this function as you're using the global state to monitor authentication status */
// onAuthStateChanged(auth,()=>{
// })

//skeleton
/* 
const signOut = async()=>{
  try {

  } catch (error) {
    console.log(error)
  }
} 
*/

const signOutFn = async () => {
  try {
    await signOut(auth)
    console.log('User signed out!')
  } catch (error) {
    console.log(error)
  }
}

export { signInFn, signUpFn, signOutFn }
