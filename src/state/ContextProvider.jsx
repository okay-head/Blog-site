/* 
  List of states provided:
- Signed in state
- User state
- Base api url state

*/
import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  //init from localStorage for persistence
  const flag = JSON.parse(localStorage.getItem('signedIn')) || false
  const user_data = JSON.parse(localStorage.getItem('user_data')) || {
    data: 'no data present!',
  }
  // const base_url =
  //   JSON.parse(localStorage.getItem('base_url')) ||
  //   'https://json-server-vercel-eta-two.vercel.app'
  const base_url =
    JSON.parse(localStorage.getItem('base_url')) || 'http://localhost:3000'

  // sign in state
  const [isSignedIn, setIsSignedIn] = useState(flag)
  // user state
  const [user, setUserFn] = useState(user_data)
  // baseUrl state
  const [baseUrl, setBaseUrlFn] = useState(base_url)

  // sign in setter
  const setSignedIn = (val, _user = {}) => {
    setIsSignedIn(val)
    localStorage.setItem('signedIn', val)
  }
  // user setter
  const setUser = (val) => {
    setUserFn(val)
    localStorage.setItem('user_data', JSON.stringify(val))
  }
  // base url setter
  const setBaseUrl = (val) => {
    setBaseUrlFn(val)
    localStorage.setItem('base_url', JSON.stringify(val))
  }

  return (
    <SignInContext.Provider
      value={{ isSignedIn, setSignedIn, user, setUser, baseUrl, setBaseUrl }}
    >
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
