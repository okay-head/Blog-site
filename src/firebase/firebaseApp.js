// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsBR6zSZi0EajAQeyOqmcxhk7Rci8GYps',
  authDomain: 'blog-site-backend-5b59d.firebaseapp.com',
  projectId: 'blog-site-backend-5b59d',
  storageBucket: 'blog-site-backend-5b59d.appspot.com',
  messagingSenderId: '352074889279',
  appId: '1:352074889279:web:f4aaeaba816ffe6fc9208a',
  databaseURL: 'https://blog-site-backend-5b59d-default-rtdb.asia-southeast1.firebasedatabase.app'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
