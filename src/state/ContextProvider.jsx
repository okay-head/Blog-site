import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  //init from localStorage
  const flag = JSON.parse(localStorage.getItem('signedIn')) || false
  const [isSignedIn, setIsSignedIn] = useState(flag)

  const setSignedIn = (val) => {
    setIsSignedIn(val)
    localStorage.setItem('signedIn', val)
  }
  return (
    <SignInContext.Provider value={{ isSignedIn, setSignedIn }}>
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
