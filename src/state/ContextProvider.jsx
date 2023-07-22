import { useState, createContext } from 'react'
const SignInContext = createContext(undefined)

export function ContextProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false)

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
