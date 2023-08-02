import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  //init from localStorage
  const flag = JSON.parse(localStorage.getItem('signedIn')) || false
  // sign in state
  const [isSignedIn, setIsSignedIn] = useState(flag)

  // user state
  const [user, setUser] = useState({data: 'no data present!'})

  const setSignedIn = (val, _user={}) => {
    setIsSignedIn(val)
    localStorage.setItem('signedIn', val)
  }
  return (
    <SignInContext.Provider value={{ isSignedIn, setSignedIn, user, setUser }}>
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
