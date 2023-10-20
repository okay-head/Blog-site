import {getAuth,connectAuthEmulator, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import { app } from './firebaseApp'

const auth = getAuth(app)

connectAuthEmulator(auth,'http://127.0.0.1:9099')

const signInFn = async(email,password)=>{
  try {
    const user = await signInWithEmailAndPassword(auth,email,password)
    console.log('Signed in!',user)
  } catch (error) {
    // Log detailed error, make switch case here
    console.log(error.code)
  }
}

const signUpFn = async(email,password)=>{
  try {
    const user = await createUserWithEmailAndPassword(auth, email,password)
    console.log('Created user and signed in!',user)
  } catch (error) {
    console.log(error)
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

const signOutFn = async()=>{
  try {
    await signOut(auth)
    console.log('User signed out!')
  } catch (error) {
    console.log(error)
  }
} 

export {signInFn,signUpFn,signOutFn,}